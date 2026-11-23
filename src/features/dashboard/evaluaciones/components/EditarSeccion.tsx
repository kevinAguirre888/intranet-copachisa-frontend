import { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { MdLayers } from "react-icons/md";
import type {
  SeccionEvaluacionRead,
  SeccionEvaluacionUpdate,
} from "../types/secciones";

// Tipos de los parámetros del componente
type Props = {
  seccion: SeccionEvaluacionRead | null;
  onCerrar: () => void;
  onGuardar: (
    id: number,
    cambios: Partial<SeccionEvaluacionUpdate>,
  ) => Promise<void>;
};

// Límites de los campos, deben coincidir con min_length y max_length del schema del backend
const TITULO_MIN = 5;
const TITULO_MAX = 100;
const DESCRIPCION_MIN = 5;
const DESCRIPCION_MAX = 255;

/**
 * Modal con un formulario que se utiliza para editar los datos de una sección.
 *
 * @param seccion - Objeto de la sección a editar.
 * @param onCerrar - Función que proporciona el componente padre para cambiar el estado y cerrar el modal.
 */
export const EditarSeccion = ({ seccion, onCerrar, onGuardar }: Props) => {
  const [titulo, setTitulo] = useState(seccion?.titulo ?? ""); // Copias de los datos actuales, el usuario edita las copias
  const [descripcion, setDescripcion] = useState(seccion?.descripcion ?? "");

  const longitudTitulo = titulo.trim().length;
  const tituloMuyCorto = longitudTitulo < TITULO_MIN;
  const tituloMuyLargo = longitudTitulo > TITULO_MAX;
  const tituloInvalido = tituloMuyCorto || tituloMuyLargo;

  const longitudDescripcion = descripcion.trim().length;
  const descripcionMuyCorta = longitudDescripcion < DESCRIPCION_MIN;
  const descripcionMuyLarga = longitudDescripcion > DESCRIPCION_MAX;
  const descripcionInvalida = descripcionMuyCorta || descripcionMuyLarga;

  const formularioInvalido = tituloInvalido || descripcionInvalida;

  const guardar = async () => {
    if (!seccion || formularioInvalido) return;

    // Solo se envían los campos que cambiaron; el backend no acepta valores nulos
    const cambios: Partial<SeccionEvaluacionUpdate> = {};
    if (titulo.trim() !== seccion.titulo) cambios.titulo = titulo.trim();
    if (descripcion.trim() !== seccion.descripcion)
      cambios.descripcion = descripcion.trim();

    // TODO: Atrapar el error de onGuardar (try/catch) y mostrar el mensaje traducido sin cerrar el modal.
    if (Object.keys(cambios).length > 0) {
      await onGuardar(seccion.idSeccion, cambios);
    }
    onCerrar();
  };

  return (
    <Modal
      isOpen={seccion !== null}
      onOpenChange={(abierto) => !abierto && onCerrar()}
    >
      <Modal.Backdrop isDismissable={false}>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-copachisa/40 text-black">
                <MdLayers className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Editar sección</Modal.Heading>
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
                    <Label>Título de la sección</Label>
                    <Input
                      placeholder="Escribe el nuevo nombre de la sección"
                      className="ring-copachisa/50"
                    />
                    <FieldError>
                      {tituloMuyCorto
                        ? `El título debe tener al menos ${TITULO_MIN} caracteres.`
                        : `El título no puede tener más de ${TITULO_MAX} caracteres (${longitudTitulo}/${TITULO_MAX}).`}
                    </FieldError>
                  </TextField>

                  <TextField
                    className="w-full"
                    name="descripcion"
                    variant="secondary"
                    value={descripcion}
                    onChange={setDescripcion}
                    isInvalid={descripcionInvalida}
                  >
                    <Label>Descripción de la sección</Label>
                    <TextArea
                      rows={5}
                      placeholder="Escribe la nueva descripción de la sección"
                      className="ring-copachisa/50"
                    />
                    <FieldError>
                      {descripcionMuyCorta
                        ? `La descripción debe tener al menos ${DESCRIPCION_MIN} caracteres.`
                        : `La descripción no puede tener más de ${DESCRIPCION_MAX} caracteres (${longitudDescripcion}/${DESCRIPCION_MAX}).`}
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
                isDisabled={formularioInvalido}
                className="text-black bg-copachisa hover:bg-copachisa/85"
              >
                Actualizar sección
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};
