import { Link, useParams } from "react-router";
import { MdArrowBack } from "react-icons/md";
import { useEvaluacionCompleta } from "../hooks/useEvaluaciones";
import { useEscalas } from "../hooks/useEscalas";
import { SeccionPrevisualizacion } from "../components/SeccionPrevisualizacion";

export const EvaluacionPrevisualizacionPage = () => {
  const { idEvaluacion } = useParams();
  const { evaluacion, secciones, cargando, error } = useEvaluacionCompleta(
    Number(idEvaluacion),
  );

  // Solo se piden las escalas si algún contenido activo es de tipo "Escala"
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
        {cargando && <p>Cargando evaluación...</p>}{" "}
        {/* TODO: Añadir un skeleton de HeroUI */}
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
