import { useState } from "react";
import { Skeleton, Table } from "@heroui/react";
import { formatearFecha } from "@/shared/utils/fechas";
import { SwitchEstado } from "@/shared/components/SwitchEstado";
import { EstadoError } from "@/shared/components/EstadoError";
import type { useEvaluaciones } from "../../hooks/useEvaluaciones";
import { BotonEditar } from "./BotonEditar";
import { ModalEditar } from "./ModalEditar";
import type { EvaluacionRead } from "../../types/evaluaciones";
import { DropdownAcciones } from "./DropdownAcciones";

// El estado vive en EvaluacionesPage (se comparte con el modal de crear) y llega por props
type Props = Pick<
  ReturnType<typeof useEvaluaciones>,
  | "evaluaciones"
  | "cargando"
  | "error"
  | "recargar"
  | "cambiarEstatus"
  | "editarEvaluacion"
>;

export const TablaEvaluaciones = ({
  evaluaciones,
  cargando,
  error,
  recargar,
  cambiarEstatus,
  editarEvaluacion,
}: Props) => {
  const [editando, setEditando] = useState<EvaluacionRead | null>(null); // Estado para saber si está editando una evaluación.

  if (error) return <EstadoError mensaje={error} onReintentar={recargar} />;

  return (
    <>
      <Table className="">
        <Table.ScrollContainer>
          <Table.Content aria-label="Evaluaciones" className="min-w-150">
            <Table.Header>
              <Table.Column isRowHeader>ID</Table.Column>
              <Table.Column>Título</Table.Column>
              <Table.Column>Estatus</Table.Column>
              <Table.Column>Creado</Table.Column>
              <Table.Column>Última edición</Table.Column>
              <Table.Column>Acciones</Table.Column>
            </Table.Header>
            <Table.Body>
              {cargando &&
                Array.from({ length: 1 }).map((_, i) => (
                  <Table.Row key={`skeleton-${i}`}>
                    <Table.Cell>
                      <Skeleton className="h-4 w-8 rounded" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton className="h-4 w-48 rounded" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton className="h-6 w-10 rounded-full" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton className="h-4 w-24 rounded" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton className="h-4 w-24 rounded" />
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton className="h-8 w-20 rounded" />
                    </Table.Cell>
                  </Table.Row>
                ))}
              {!cargando &&
                evaluaciones.map((e) => (
                  <Table.Row key={e.idEvaluacion}>
                    <Table.Cell>{e.idEvaluacion}</Table.Cell>
                    <Table.Cell>{e.titulo}</Table.Cell>
                    <Table.Cell>
                      <SwitchEstado
                        activo={e.activo}
                        nombreRecurso="la evaluación"
                        onConfirmar={(nuevoValor) =>
                          cambiarEstatus(e.idEvaluacion, nuevoValor)
                        }
                      />
                    </Table.Cell>
                    <Table.Cell>{formatearFecha(e.fechaCreacion)}</Table.Cell>
                    <Table.Cell>
                      {formatearFecha(e.fechaActualizacion)}
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-2">
                        <BotonEditar onPress={() => setEditando(e)} />
                        <DropdownAcciones idEvaluacion={e.idEvaluacion} />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>

      <ModalEditar
        key={editando?.idEvaluacion}
        evaluacion={editando}
        onCerrar={() => setEditando(null)}
        onGuardar={editarEvaluacion}
      />
    </>
  );
};
