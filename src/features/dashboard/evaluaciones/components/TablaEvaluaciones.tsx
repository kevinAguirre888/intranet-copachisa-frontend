import { useState } from "react";
import { Table } from "@heroui/react";
import { formatearFecha } from "@/shared/utils/fechas";
import { SwitchEstado } from "@/shared/components/SwitchEstado";
import { useEvaluaciones } from "../hooks/useEvaluaciones";
import { BotonEditar } from "./BotonEditar";
import { ModalEditar } from "./ModalEditar";
import type { EvaluacionRead } from "../types/evaluaciones";
import { DropdownAcciones } from "./DropdownAcciones";

export const TablaEvaluaciones = () => {
  const { evaluaciones, cargando, error, cambiarEstatus, editarEvaluacion } =
    useEvaluaciones(); // Hooks para lógica de estados de UI
  const [editando, setEditando] = useState<EvaluacionRead | null>(null); // Estado para saber si está editando una evaluación.

  if (cargando) return <p>Cargando evaluaciones...</p>; // TODO: Añadir un skeleton de HeroUI
  if (error) return <p>{error}</p>;

  return (
    <>
      <Table>
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
              {evaluaciones.map((e) => (
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
