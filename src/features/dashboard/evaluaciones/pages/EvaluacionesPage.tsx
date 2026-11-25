import { useState } from "react";
import { TablaEvaluaciones } from "../components/TablaEvaluaciones/TablaEvaluaciones";
import { DropdownFiltros } from "../components/DropdownFiltros";
import { BotonCrear } from "../components/BotonCrear";
import { ModalCrearEvaluacion } from "../components/ModalCrearEvaluacion";
import { useEvaluaciones } from "../hooks/useEvaluaciones";

export const EvaluacionesPage = () => {
    const { agregarEvaluacion, ...tabla } = useEvaluaciones(); // Estado compartido entre la tabla y el modal de crear
    const [creando, setCreando] = useState(false); // Indica si el modal de crear evaluación está abierto

    return (
        <div className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-2">
                <BotonCrear onPress={() => setCreando(true)} />
                <DropdownFiltros />
            </div>
            <TablaEvaluaciones {...tabla} />

            <ModalCrearEvaluacion
                abierto={creando}
                onCerrar={() => setCreando(false)}
                onCrear={agregarEvaluacion}
            />
        </div>
    )
};
