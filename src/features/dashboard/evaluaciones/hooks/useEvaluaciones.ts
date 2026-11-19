import { useEffect, useState } from "react";
import {
  actualizarEstadoEvaluacion,
  obtenerEvaluaciones,
} from "../api/evaluaciones";
import type { EvaluacionRead } from "../types/evaluaciones";

export const useEvaluaciones = () => {
  const [evaluaciones, setEvaluaciones] = useState<EvaluacionRead[]>([]); // Estado que comienza con una lista vacía de evaluaciones.
  const [cargando, setCargando] = useState(true); // Estado que establece "cargando" como verdadero por defecto.
  const [error, setError] = useState<string | null>(null); // Estado que establece un posible error como null mientras no haya ocurrido.

  // Hook que se utiliza para obtener las evaluaciones registradas en el backend.
  useEffect(() => {
    const cargar = async () => {
      try {
        setEvaluaciones(await obtenerEvaluaciones()); // Solicitud al backend.
      } catch {
        setError("No se pudieron cargar las evaluaciones.");
      } finally {
        setCargando(false); // Al finalizar siempre se establece "cargando" como falso.
      }
    };
    cargar();
  }, []); // Los corchetes definen que este bloque de código sólo se ejecuta una sola vez después al montar el componente.

  // Hook que se utiliza para actualizar el estado de una evaluación.
  const cambiarEstatus = async (id: number, nuevoValor: boolean) => {
    try {
      const actualizada = await actualizarEstadoEvaluacion(id, {
        activo: nuevoValor,
      });

      setEvaluaciones((actuales) =>
        actuales.map((evaluacion) =>
          evaluacion.idEvaluacion === id ? actualizada : evaluacion,
        ),
      );
    } catch {
      console.error("No se pudo actualizar el estatus de la evaluación.");
    }
  };
  return { evaluaciones, cargando, error, cambiarEstatus };
};
