import { MdOutlineAssignment, MdFormatListNumbered, MdOutlineQuiz } from "react-icons/md";
import { Description, Dropdown, Label } from "@heroui/react";
import { useNavigate } from "react-router";
import { BotonAcciones } from "./BotonAcciones";
import { useState } from "react";
import { ModalSecciones } from "../Secciones/ModalSecciones";

type Props = {
  idEvaluacion: number;
};

/**
 * Botón con un menú de opciones para configurar una evaluación.
 *
 * @param idEvaluacion - ID de la evaluación sobre la que actúan las opciones.
 */
export const DropdownAcciones = ({ idEvaluacion }: Props) => {
  const navigate = useNavigate();

  const [ModalSeccionesAbierto, setModalSeccionesAbierto] = useState(false); // El modal de las secciones permanece cerrado al montar el componente

  const manejarAccion = (key: React.Key) => {
    if (key === "previsualizar") {
      navigate(`/dashboard/evaluaciones/${idEvaluacion}/previsualizacion`);
    }

    if (key == "secciones") {
      setModalSeccionesAbierto(true);
    }
  };

  return (
    <>
    <Dropdown>
      <BotonAcciones />
      <Dropdown.Popover>
        <Dropdown.Menu onAction={manejarAccion}>
          <Dropdown.Item
            id="previsualizar"
            textValue="Previsualizar evaluación"
          >
            <div className="flex h-8 items-start justify-center pt-px">
              <MdOutlineAssignment className="size-4 shrink-0 text-muted" />
            </div>
            <div className="flex flex-col">
              <Label>Previsualizar evaluación</Label>
              <Description>Ver secciones y contenido</Description>
            </div>
          </Dropdown.Item>
          <Dropdown.Item id="secciones" textValue="Administrar secciones">
            <div className="flex h-8 items-start justify-center pt-px">
              <MdFormatListNumbered  className="size-4 shrink-0 text-muted" />
            </div>
            <div className="flex flex-col">
              <Label>Administrar secciones</Label>
              <Description>Crear y editar secciones</Description>
            </div>
          </Dropdown.Item>
          <Dropdown.Item id="save-file" textValue="Save file">
            <div className="flex h-8 items-start justify-center pt-px">
              <MdOutlineQuiz className="size-4 shrink-0 text-muted" />
            </div>
            <div className="flex flex-col">
              <Label>Administrar contenido</Label>
              <Description>Crear y editar el contenido</Description>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>

    <ModalSecciones
      idEvaluacion={idEvaluacion}
      isOpen={ModalSeccionesAbierto}
      onOpenChange={setModalSeccionesAbierto}
    />
    </>
  );
};
