import { useCallback, useEffect, useMemo, useState } from "react";
import {
  actualizarEstadoEvaluacion,
  buscarEvaluacionPorId,
  obtenerEvaluaciones,
  actualizarEvaluacion,
} from "../api/evaluaciones";
import type {
  EvaluacionCompleta,
  EvaluacionRead,
  EvaluacionUpdate,
} from "../types/evaluaciones";

export const useEvaluaciones = () => {
  const [evaluaciones, setEvaluaciones] = useState<EvaluacionRead[]>([]); // Estado que comienza con una lista vacía de evaluaciones
  const [cargando, setCargando] = useState(true); // Estado que establece "cargando" como verdadero por defecto
  const [error, setError] = useState<string | null>(null); // Estado que establece un posible error como null mientras no haya ocurrido

  // Función para cargar las evaluaciones; useCallback conserva la misma referencia entre renders
  const cargar = useCallback(async () => {
    setCargando(true); // Establece el estado cargando como true
    setError(null); // Limpia el error después de establecer el estado de carga
    try {
      setEvaluaciones(await obtenerEvaluaciones()); // Se intenta hacer la solicitud para obtener la lista de evaluaciones
    } catch {
      // Si ocurre un error se establece un mensaje para el estado de error
      setError("No se lograron cargar las evaluaciones.");
    } finally {
      setCargando(false); // Al finalizar siempre se establece "cargando" como falso
    }
  }, []); // La función se crea una sola vez y mantiene la misma referencia

  // Hook que se utiliza para obtener las evaluaciones registradas en el backend
  useEffect(() => {
    cargar();
  }, [cargar]); // La función se ejecuta al montar un componente y solo se repetiría si cargar cambiara

  // Hook que se utiliza para actualizar el estado de una evaluación
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
      // TODO: Mismo problema que editarEvaluacion, el error se traga y el usuario no se entera. Resolver con el manejo global de errores.
      console.error("No se pudo actualizar el estatus de la evaluación.");
    }
  };

  // Hook que se utiliza para actualizar parcialmente los datos de una evaluación
  const editarEvaluacion = async (
    id: number,
    datosActualizados: Partial<EvaluacionUpdate>,
  ) => {
    try {
      const evaluacionActualizada = await actualizarEvaluacion(
        id,
        datosActualizados,
      );

      setEvaluaciones((actuales) =>
        actuales.map((evaluacion) =>
          evaluacion.idEvaluacion === id ? evaluacionActualizada : evaluacion,
        ),
      );
    } catch {
      // TODO: Quitar este try/catch (o volver a lanzar el error) para que ModalEditar sepa que falló y no se cierre.
      // El manejo de errores (422 de pydantic, traducción al español, toast) irá en un interceptor global de axios en shared/api/client.ts
      console.error("No se pudo actualizar la evaluación.");
    }
  };

  return {
    evaluaciones,
    cargando,
    error,
    recargar: cargar,
    cambiarEstatus,
    editarEvaluacion,
  };
};

/**
 * Obtiene una sola evaluación con sus secciones, por ejemplo para previsualizarla.
 * Es un hook aparte de useEvaluaciones porque ese carga la lista completa para la tabla,
 * y aquí solo se necesita un registro que depende del id de la ruta.
 *
 * @param idEvaluacion - ID de la evaluación a consultar.
 */
export const useEvaluacionCompleta = (idEvaluacion: number) => {
  const [evaluacion, setEvaluacion] = useState<EvaluacionCompleta | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Se vuelve a consultar si cambia el id de la evaluación
  const cargar = useCallback(async () => {
    setCargando(true); // Establece el estado cargando como true
    setError(null); // Limpia el error después de establecer el estado de carga
    try {
      setEvaluacion(await buscarEvaluacionPorId(idEvaluacion)); // Se intenta hacer la solicitud para obtener la evaluación por ID
    } catch {
      setError("No se pudo cargar la evaluación.");
    } finally {
      setCargando(false);
    }
  }, [idEvaluacion]); // Se vuelve a ejecutar la función sólo si se cambia el ID

  useEffect(() => {
    cargar();
  }, [cargar]);

  // Solo las secciones activas, ordenadas por el campo "orden"
  const secciones = useMemo(
    () =>
      (evaluacion?.secciones ?? [])
        .filter((s) => s.activo)
        .sort((a, b) => a.orden - b.orden),
    [evaluacion],
  );

  return { evaluacion, secciones, cargando, error, recargar: cargar };
};
