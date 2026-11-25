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
import type { EvaluacionRead, EvaluacionUpdate } from "../../types/evaluaciones";
 
// Tipos de los parámetros del componente
type Props = {
  evaluacion: EvaluacionRead | null;
  onCerrar: () => void;
  onGuardar: (id: number, cambios: Partial<EvaluacionUpdate>) => Promise<void>;
};

// Límites del título, deben coincidir con min_length y max_length del schema del backend
const TITULO_MIN = 5;
const TITULO_MAX = 150;

/**
 * Modal con un formulario que se utiliza para editar los datos de una evaluación.
 *
 * @param evaluacion - Objeto de la evaluación a editar.
 * @param onCerrar - Función que proporciona el componente padre para cambiar el estado y cerrar el modal.
 */
export const ModalEditar = ({ evaluacion, onCerrar, onGuardar }: Props) => {
  const [titulo, setTitulo] = useState(evaluacion?.titulo ?? ""); // Copia del título actual, el usuario edita la copia

  const longitudTitulo = titulo.trim().length; // Longitud del título sin espacios sobrantes al inicio y al final
  const tituloMuyCorto = longitudTitulo < TITULO_MIN; // boolean que indica si el título es menor al mínimo permitido
  const tituloMuyLargo = longitudTitulo > TITULO_MAX; // boolean que indica si el título excede el máximo permitido
  const tituloInvalido = tituloMuyCorto || tituloMuyLargo; // boolean que indica si el título no cumple alguna de las dos reglas

  // TODO: Atrapar el error de onGuardar (try/catch) y mostrar el mensaje traducido sin cerrar el modal.
  const guardar = async () => {
    if (!evaluacion || tituloInvalido) return; // Si no hay una evaluación que editar o el título es invalido no sucede nada
    await onGuardar(evaluacion.idEvaluacion, { titulo: titulo.trim() }); // Si se editan los datos se guarda el resultado
    onCerrar();
  };

  return (
    <Modal
      isOpen={evaluacion !== null}
      onOpenChange={(abierto) => !abierto && onCerrar()}
    >
      <Modal.Backdrop isDismissable={false}>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-neutral-200">
                <MdAssignment className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Editar evaluación</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Modifica solo los campos que necesites. Los demás se conservarán
                sin cambios.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="titulo"
                    type="text"
                    variant="secondary"
                    value={titulo}
                    onChange={setTitulo}
                    isInvalid={tituloInvalido}
                  >
                    <Label>Título de la evaluación</Label>
                    <Input
                      placeholder="Escribe el nuevo nombre de la evaluación"
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
                onPress={guardar}
                isDisabled={tituloInvalido}
                className="text-black bg-copachisa hover:bg-copachisa/85"
              >
                Actualizar evaluación
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
