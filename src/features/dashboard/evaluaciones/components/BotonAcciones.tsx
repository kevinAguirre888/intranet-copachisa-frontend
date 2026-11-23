import { Button, Tooltip } from "@heroui/react";
import { MdBuild } from "react-icons/md";


export const BotonAcciones = () => {
    return (
    <Tooltip delay={0} closeDelay={1}>
        <Button
        isIconOnly
        aria-label="Ver acciones de configuración de evaluación"
        className="text-black bg-neutral-200 hover:bg-neutral-300"
        >
        <MdBuild />
        </Button>
        <Tooltip.Content>Configuración de la evaluación</Tooltip.Content>
    </Tooltip>
    )
}