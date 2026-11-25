import { useState } from "react";
import { Switch } from "@heroui/react";
import type { SwitchEstadoProps } from "@/shared/types/estados";
import { ConfirmarEstado } from "./ConfirmarEstado";

export const SwitchEstado = ({
  activo,
  onConfirmar,
  nombreRecurso = "el registro",
}: SwitchEstadoProps) => {
  const [abierto, setAbierto] = useState(false);

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

      <ConfirmarEstado
        isOpen={abierto}
        onOpenChange={setAbierto}
        activo={activo}
        onConfirmar={onConfirmar}
        nombreRecurso={nombreRecurso}
      />
    </>
  );
};
