import { Button } from "@heroui/react";
import { MdAdd } from "react-icons/md";

type Props = {
  onPress: () => void;
};

export const BotonCrear = ({ onPress }: Props) => {
  return (
    <Button
      aria-label="Crear evaluación"
      onPress={onPress}
      className="bg-copachisa text-black hover:bg-copachisa/85"
    >
      <MdAdd />
      Crear evaluación
    </Button>
  );
};
