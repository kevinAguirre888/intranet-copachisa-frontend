import { useState } from "react";
import { Accordion, Button, ButtonGroup } from "@heroui/react";
import {
  MdEdit,
  MdLayers,
  MdOutlineToggleOff,
  MdOutlineToggleOn,
  MdOutlineQuiz,
} from "react-icons/md";
import type { SeccionEvaluacionRead, SeccionEvaluacionUpdate } from "../../types/secciones";
import { ModalEditarSeccion } from "./ModalEditarSeccion";
import { ConfirmarEstado } from "@/shared/components/ConfirmarEstado";

type Props = {
  secciones: SeccionEvaluacionRead[];
  onCambiarEstado: (id: number, nuevoValor: boolean) => Promise<void>; // Activa o desactiva una sección
  onEditar: (id: number, cambios: Partial<SeccionEvaluacionUpdate>) => Promise<void>; // Actualiza título y/o descripción de una sección
};

export const AccordionSecciones = ({ secciones, onCambiarEstado, onEditar }: Props) => {
  const [editando, setEditando] = useState<SeccionEvaluacionRead | null>(null); // Sección que se está editando, null si ninguna
  const [cambiandoEstado, setCambiandoEstado] = useState<SeccionEvaluacionRead | null>(null); // Sección cuyo estado se va a confirmar, null si ninguna

  return (
    <>
    <Accordion className="w-full">
      {secciones.map((seccion) => (
        <Accordion.Item key={seccion.idSeccion} id={String(seccion.idSeccion)}>
          <Accordion.Heading>
            <Accordion.Trigger>
              <span className="me-3 size-4 shrink-0 text-muted">
                <MdLayers />
              </span>
              {seccion.titulo}
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body>
              <p>{seccion.descripcion}</p>
              <ButtonGroup size="sm" variant="tertiary" className="mt-3 ">
                <Button
                  className="text-neutral-700"
                  onPress={() => setEditando(seccion)}
                >
                  <MdEdit />
                  Editar
                </Button>
                <Button
                  className="text-neutral-700"
                  onPress={() => setCambiandoEstado(seccion)}
                >
                  <ButtonGroup.Separator />
                  {seccion.activo ? (
                    <MdOutlineToggleOff />
                  ) : (
                    <MdOutlineToggleOn />
                  )}
                  {seccion.activo ? "Desactivar" : "Activar"}
                </Button>
                <Button className="text-neutral-700">
                  <MdOutlineQuiz />
                  Ver contenido
                </Button>
              </ButtonGroup>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>

    <ModalEditarSeccion
      key={editando?.idSeccion}
      seccion={editando}
      onCerrar={() => setEditando(null)}
      onGuardar={onEditar}
    />

    <ConfirmarEstado
      isOpen={cambiandoEstado !== null}
      onOpenChange={(abierto) => !abierto && setCambiandoEstado(null)}
      activo={cambiandoEstado?.activo ?? false}
      nombreRecurso="la sección"
      onConfirmar={(nuevoValor) =>
        cambiandoEstado && onCambiarEstado(cambiandoEstado.idSeccion, nuevoValor)
      }
    />
    </>
  );
};
