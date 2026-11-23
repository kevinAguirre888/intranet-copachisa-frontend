import { useEffect, useMemo, useState } from "react";
import { obtenerEscalas } from "../api/escalas";
import type { Escala } from "../types/evaluaciones";

/**
 * Obtiene el catálogo de escalas una sola vez, para pintarlas en los contenidos de tipo "Escala".
 * El catálogo es el mismo para todos los contenidos, por eso no se anida en cada uno desde el backend.
 *
 * @param habilitado - Si es false no se hace la petición (por ejemplo, si la evaluación no tiene contenido de tipo Escala).
 */
export const useEscalas = (habilitado: boolean) => {
  const [todas, setTodas] = useState<Escala[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!habilitado) return;

    const cargar = async () => {
      setCargando(true);
      try {
        setTodas(await obtenerEscalas());
      } catch {
        setError("No se pudieron cargar las escalas.");
      } finally {
        setCargando(false);
      }
    };
    cargar();
  }, [habilitado]);

  // Solo las activas, sin la de valor 0 ("No observable"; solo aplica si no se elige ninguna otra) y ordenadas por valor
  const escalas = useMemo(
    () =>
      todas
        .filter((e) => e.activo && Number(e.valor) > 0)
        .sort((a, b) => Number(a.valor) - Number(b.valor)),
    [todas],
  );

  return { escalas, cargando, error };
};
