import { AlertDialog, Button } from "@heroui/react";
import type { ConfirmarEstadoProps } from "@/shared/types/estados";

/**
 * Diálogo de confirmación para activar o desactivar un recurso.
 * Lo usan SwitchEstado (evaluaciones) y los botones de activar/desactivar (secciones).
 */
export const ConfirmarEstado = ({
  isOpen,
  onOpenChange,
  activo,
  onConfirmar,
  nombreRecurso = "el registro",
}: ConfirmarEstadoProps) => {
  const confirmar = () => {
    onConfirmar(!activo);
    onOpenChange(false);
  };

  return (
    <AlertDialog.Backdrop
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
    >
      <AlertDialog.Container>
        <AlertDialog.Dialog>
          <AlertDialog.Header>
            <AlertDialog.Icon
              status="warning"
              className="bg-copachisa/40 text-black"
            />
            <AlertDialog.Heading>
              {`¿${activo ? "Desactivar" : "Activar"} ${nombreRecurso}?`}
            </AlertDialog.Heading>
          </AlertDialog.Header>
          <AlertDialog.Body>
            {activo
              ? `Esta acción desactivará ${nombreRecurso} y dejará de estar visible para los colaboradores. ¿Deseas continuar?`
              : `Esta acción activará ${nombreRecurso} y quedará visible para los colaboradores. ¿Deseas continuar?`}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <AlertDialog.CloseTrigger></AlertDialog.CloseTrigger>
            <Button slot="close" variant="tertiary">
              Cancelar
            </Button>
            <Button
              onPress={confirmar}
              className="text-black bg-copachisa hover:bg-copachisa/85"
            >
              Confirmar
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Dialog>
      </AlertDialog.Container>
    </AlertDialog.Backdrop>
  );
};
