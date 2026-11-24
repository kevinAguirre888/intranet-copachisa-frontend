import { Button } from "@heroui/react";
import { MdErrorOutline } from "react-icons/md";

type Props = {
  mensaje: string; // detalle específico del error, viene del hook
  titulo?: string;
  onReintentar?: () => void;
};

export const EstadoError = ({
  mensaje,
  titulo = "Ha ocurrido una falla en el servidor",
  onReintentar,
}: Props) => (
  <div
    role="alert"
    className="flex min-h-screen w-full items-center justify-center px-4 py-12"
  >
    <div className="max-w-md text-center">
      <MdErrorOutline
        aria-hidden="true"
        className="mx-auto size-20 text-gray-400"
      />

      <h2 className="mt-6 text-2xl font-bold text-gray-900">{titulo}</h2>

      <p className="mt-4 text-pretty text-gray-700">
        {mensaje} Estamos trabajando en solucionar el error. Por favor, contacta con el área de
        sistemas.
      </p>

      {onReintentar && (
        <Button
          onPress={onReintentar}
          className="mt-6 w-full bg-copachisa text-black hover:bg-copachisa/90"
        >
          Reintentar
        </Button>
      )}
    </div>
  </div>
);