import { Link, useParams } from "react-router";
import { Skeleton } from "@heroui/react";
import { MdArrowBack } from "react-icons/md";
import { useEvaluacionCompleta } from "../hooks/useEvaluaciones";
import { useEscalas } from "../hooks/useEscalas";
import { SeccionPrevisualizacion } from "../components/SeccionPrevisualizacion";

export const EvaluacionPrevisualizacionPage = () => {
  const { idEvaluacion } = useParams();
  const { evaluacion, secciones, cargando, error } = useEvaluacionCompleta(
    Number(idEvaluacion),
  );

  const hayEscalas = secciones.some((s) =>
    s.contenidos.some((c) => c.activo && c.tipoRespuesta.tipo === "Escala"),
  );
  const { escalas } = useEscalas(hayEscalas);

  return (
    <div className="min-h-screen bg-copachisa/10">
      <header className="bg-white px-6 py-2 shadow-sm">
        <Link
          to="/dashboard/evaluaciones"
          className="inline-flex items-center gap-2 text-sm text-black hover:text-black/70"
        >
          <MdArrowBack className="size-5" />
          Regresar
        </Link>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-6">
        {cargando && (
          <>
            <div className="rounded-sm border-t-4 border-copachisa bg-white px-8 py-6 shadow-sm">
              <Skeleton className="h-8 w-2/3 rounded" />
            </div>
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-sm bg-white px-8 py-6 shadow-sm"
              >
                <Skeleton className="h-6 w-1/3 rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-5/6 rounded" />
              </div>
            ))}
          </>
        )}
        {error && <p>{error}</p>}
        {evaluacion && (
          <>
            <div className="rounded-sm border-t-4 border-copachisa bg-white px-8 py-6 shadow-sm">
              <h1 className="text-2xl font-semibold text-black">
                {evaluacion.titulo}
              </h1>
            </div>

            {secciones.map((s, i) => (
              <SeccionPrevisualizacion
                key={s.idSeccion}
                seccion={s}
                numero={i + 1}
                escalas={escalas}
              />
            ))}
          </>
        )}
      </main>
    </div>
  );
};
