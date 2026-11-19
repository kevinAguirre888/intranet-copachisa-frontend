import { useState } from "react";
import { AlertDialog, Button, Switch } from "@heroui/react";
import type { SwitchEstadoProps } from "@/shared/types/estados";

export const SwitchEstado = ({
  activo,
  onConfirmar,
  nombreRecurso = "el registro",
}: SwitchEstadoProps) => {
  const [abierto, setAbierto] = useState(false);

  const confirmar = () => {
    onConfirmar(!activo);
    setAbierto(false);
  };

  return (
    <>
      <Switch
        aria-label={`Actualizar estado de ${nombreRecurso}`}
        isSelected={activo}
        onChange={() => setAbierto(true)}
        className="[--switch-control-bg-checked-hover:var(--success)] [--switch-control-bg-checked:var(--success)]"
      >
        <Switch.Content>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Content>
      </Switch>

      <AlertDialog.Backdrop isOpen={abierto} onOpenChange={setAbierto}>
        <AlertDialog.Container>
          <AlertDialog.Dialog>
            <AlertDialog.Header>
              <AlertDialog.Icon status="warning" />
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
    </>
  );
};
