import { Button, Tooltip } from "@heroui/react";
import { MdEdit } from "react-icons/md";

/**
 * 
 * @param onPress - Función que proporciona el componente padre para cambiar el estado y saber que la evaluación se va a editar.
 */
export const BotonEditar = ({ onPress }: { onPress: () => void }) => {
  return (
    <Tooltip delay={0} closeDelay={1}>
      <Button
        isIconOnly
        aria-label="Editar datos de evaluación"
        className="text-black bg-neutral-200 hover:bg-neutral-300"
        onPress={onPress}
      >
        <MdEdit />
      </Button>
      <Tooltip.Content>Editar datos de la evaluación</Tooltip.Content>
    </Tooltip>
  );
};
