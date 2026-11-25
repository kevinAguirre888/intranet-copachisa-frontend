import { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { MdAssignment } from "react-icons/md";

// Tipos de los parámetros del componente
type Props = {
  abierto: boolean;
  onCerrar: () => void;
  onCrear?: (titulo: string) => void | Promise<void>;
};

// Límites del título, deben coincidir con min_length y max_length del schema del backend
const TITULO_MIN = 5;
const TITULO_MAX = 150;

/**
 * Modal con un formulario que se utiliza para crear una evaluación.
 * La creación real la hace el padre mediante onCrear; el modal solo valida y espera el resultado.
 *
 * @param abierto - Indica si el modal está visible.
 * @param onCerrar - Función que proporciona el componente padre para cerrar el modal.
 * @param onCrear - (Opcional) Función que recibe el título ya validado al confirmar.
 */
export const ModalCrearEvaluacion = ({ abierto, onCerrar, onCrear }: Props) => {
  const [titulo, setTitulo] = useState(""); // Título que escribe el usuario
  const [guardando, setGuardando] = useState(false); // Indica si la solicitud de creación está en curso

  const longitudTitulo = titulo.trim().length; // Longitud del título sin espacios sobrantes al inicio y al final
  const tituloMuyCorto = longitudTitulo < TITULO_MIN; // boolean que indica si el título es menor al mínimo permitido
  const tituloMuyLargo = longitudTitulo > TITULO_MAX; // boolean que indica si el título excede el máximo permitido
  const tituloInvalido = tituloMuyCorto || tituloMuyLargo; // boolean que indica si el título no cumple alguna de las dos reglas

  // Limpia el campo y avisa al padre para que cierre el modal
  const cerrar = () => {
    setTitulo("");
    onCerrar();
  };

  // Crea la evaluación; si onCrear falla, el modal se queda abierto con el título escrito
  const crear = async () => {
    if (tituloInvalido || guardando) return;
    setGuardando(true);
    try {
      await onCrear?.(titulo.trim());
      cerrar();
    } finally {
      setGuardando(false);
    }
  };

  return (
    <Modal
      isOpen={abierto}
      onOpenChange={(estaAbierto) => !estaAbierto && cerrar()}
    >
      <Modal.Backdrop isDismissable={false}>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-neutral-200">
                <MdAssignment className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Crear evaluación</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Escribe el título de la nueva evaluación.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <TextField
                    className="w-full"
                    name="titulo"
                    type="text"
                    variant="secondary"
                    value={titulo}
                    onChange={setTitulo}
                    isInvalid={titulo.length > 0 && tituloInvalido}
                  >
                    <Label>Título de la evaluación</Label>
                    <Input
                      placeholder="Escribe el nombre de la evaluación"
                      className="ring-copachisa/50"
                    />
                    <FieldError>
                      {tituloMuyCorto
                        ? `El título debe tener al menos ${TITULO_MIN} caracteres.`
                        : `El título no puede tener más de ${TITULO_MAX} caracteres (${longitudTitulo}/${TITULO_MAX}).`}
                    </FieldError>
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary" className="text-black">
                Cancelar
              </Button>
              <Button
                onPress={crear}
                isDisabled={tituloInvalido || guardando}
                className="text-black bg-copachisa hover:bg-copachisa/85"
              >
                Crear evaluación
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
