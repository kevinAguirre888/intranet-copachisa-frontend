import { useEffect, useState } from "react";
import {
  actualizarEstadoSeccion,
  actualizarSeccion,
  obtenerSeccionesPorEvaluacion,
} from "../api/secciones";
import type {
  SeccionEvaluacionRead,
  SeccionEvaluacionUpdate,
} from "../types/secciones";

/**
 * Obtiene las secciones de una evaluación (sin contenidos), por ejemplo para administrarlas en un modal.
 *
 * @param idEvaluacion - ID de la evaluación de la que se quieren las secciones.
 * @param habilitado - Si es false no se hace la petición (por ejemplo, mientras el modal está cerrado).
 */
export const useSeccionesEvaluacion = (
  idEvaluacion: number,
  habilitado: boolean,
) => {
  const [secciones, setSecciones] = useState<SeccionEvaluacionRead[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Se vuelve a consultar cada vez que se habilita o cambia la evaluación
  useEffect(() => {
    if (!habilitado) return;

    const cargar = async () => {
      setCargando(true);
      setError(null);
      try {
        const todas = await obtenerSeccionesPorEvaluacion(idEvaluacion);
        setSecciones([...todas].sort((a, b) => a.orden - b.orden));
      } catch {
        setError("No se pudieron cargar las secciones.");
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, [idEvaluacion, habilitado]);

  // Activa o desactiva una sección y reemplaza en la lista local la que devuelve el backend
  const cambiarEstatus = async (id: number, nuevoValor: boolean) => {
    try {
      const actualizada = await actualizarEstadoSeccion(id, {
        activo: nuevoValor,
      });

      setSecciones((actuales) =>
        actuales.map((seccion) =>
          seccion.idSeccion === id ? actualizada : seccion,
        ),
      );
    } catch {
      // TODO: Mismo caso que useEvaluaciones, resolver con el manejo global de errores.
      console.error("No se pudo actualizar el estatus de la sección.");
    }
  };

  // Actualiza título y/o descripción de una sección y reemplaza en la lista local la que devuelve el backend
  // El error se relanza a propósito para que el modal de edición no se cierre si falla
  const editarSeccion = async (
    id: number,
    cambios: Partial<SeccionEvaluacionUpdate>,
  ) => {
    const actualizada = await actualizarSeccion(id, cambios);

    setSecciones((actuales) =>
      actuales.map((seccion) =>
        seccion.idSeccion === id ? actualizada : seccion,
      ),
    );
  };

  return { secciones, cargando, error, cambiarEstatus, editarSeccion };
};
