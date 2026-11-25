import {useState} from "react";
import { Button, Dropdown, Label } from "@heroui/react";
import {
  MdFilterAlt,
  MdOutlineExpandMore,
  MdExpandLess,
  MdOutlineToggleOn,
  MdOutlineToggleOff,
  MdViewList,
} from "react-icons/md";

export const DropdownFiltros = () => {
  const [abierto, setAbierto] = useState(false);
  
  return (
    <Dropdown isOpen={abierto} onOpenChange={setAbierto}>
      <Button
        aria-label="Filtros"
        className="bg-copachisa text-black hover:bg-copachisa/85"
      >
        <MdFilterAlt />
        Filtrar evaluaciones
        {abierto ? <MdOutlineExpandMore /> : <MdExpandLess />}
        
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item id="activas" textValue="Activas">
            <MdOutlineToggleOn className="sieze-4 shrink-0 text-muted" />
            <Label>Activas</Label>
          </Dropdown.Item>
          <Dropdown.Item id="inactivas" textValue="Inactivas">
            <MdOutlineToggleOff className="sieze-4 shrink-0 text-muted" />
            <Label>Inactivas</Label>
          </Dropdown.Item>
          <Dropdown.Item id="todas" textValue="Todas las secciones">
            <MdViewList className="sieze-4 shrink-0 text-muted" />
            <Label>Todas</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
};
