import { Button, Modal, Spinner, Surface } from "@heroui/react";
import { MdFormatListNumbered } from "react-icons/md";
import { AccordionSecciones } from "./AccordionSecciones";
import { useSeccionesEvaluacion } from "../../hooks/useSecciones";

// Parámetros del Modal
type Props = {
  idEvaluacion: number; // Evaluación de la que se muestran las secciones
  isOpen: boolean; // Indica si el modal está abierto o cerrado
  onOpenChange: (abierto: boolean) => void; // Recibe el boolean para después aplicar la lógica para abrir el modal
};

export const ModalSecciones = ({
  idEvaluacion,
  isOpen,
  onOpenChange,
}: Props) => {
  // Solo consulta las secciones cuando el modal está abierto
  const { secciones, cargando, error, cambiarEstatus, editarSeccion } =
    useSeccionesEvaluacion(idEvaluacion, isOpen);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-neutral-200">
                <MdFormatListNumbered className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Secciones de la evaluación</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Selecciona una sección y elige la acción que deseas realizar con
                los botones disponibles. Si necesitas una nueva, créala con el
                botón de la parte inferior.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                {cargando && (
                  <div className="flex justify-center py-8">
                    <Spinner className="text-copachisa" size="xl" />
                  </div>
                )}
                {error && <p className="text-sm text-danger">{error}</p>}
                {!cargando && !error && secciones.length === 0 && (
                  <p className="text-sm text-muted">
                    Esta evaluación aún no tiene secciones.
                  </p>
                )}
                {!cargando && !error && secciones.length > 0 && (
                  <AccordionSecciones
                    secciones={secciones}
                    onCambiarEstado={cambiarEstatus}
                    onEditar={editarSeccion}
                  />
                )}
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button className="text-black bg-copachisa hover:bg-copachisa/85">
                Crear sección
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
