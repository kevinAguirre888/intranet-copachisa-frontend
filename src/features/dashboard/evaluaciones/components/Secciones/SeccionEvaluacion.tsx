import { MdStar } from "react-icons/md";
import type { Escala, Seccion } from "../../types/evaluaciones";

type Props = {
  seccion: Seccion;
  numero: number;
  escalas: Escala[];
};

/**
 * Tarjeta de solo lectura con una sección de la evaluación.
 *
 * @param seccion - Sección a mostrar.
 * @param numero - Posición de la sección dentro de la evaluación (empieza en 1).
 * @param escalas - Escalas a mostrar en los contenidos de tipo "Escala".
 */
export const SeccionEvaluacion = ({
  seccion,
  numero,
  escalas,
}: Props) => {
  const contenidos = [...seccion.contenidos]
    .filter((c) => c.activo)
    .sort((a, b) => a.orden - b.orden);

  return (
    <section className="overflow-hidden rounded-sm bg-white shadow-sm">
      <div className="bg-neutral-200/50 px-8 py-2 text-xs text-neutral-600">
        Sección {numero}
      </div>

      <div className="px-8 py-6">
        <h2 className="text-xl font-semibold text-black">{seccion.titulo}</h2>
        <p className="mt-1 text-sm text-neutral-600">{seccion.descripcion}</p>

        {contenidos.length === 0 ? (
          <p className="mt-6 text-sm text-neutral-500">
            Esta sección no tiene contenido.
          </p>
        ) : (
          <ol className="mt-6 flex flex-col gap-6">
            {contenidos.map((c, i) => (
              <li key={c.idContenido} className="flex flex-col gap-2">
                <p className="text-base text-black">
                  {i + 1}. {c.texto}
                </p>
                {c.tipoRespuesta.tipo === "Escala" ? (
                  <ul className="mt-2 flex justify-between gap-2">
                    {escalas.map((e) => (
                      <li
                        key={e.idEscala}
                        title={e.parametro}
                        className="flex w-24 flex-col items-center text-center"
                      >
                        <MdStar className="size-7 text-yellow-400" />
                        <span className="text-xs text-black">
                          {Number(e.valor)}
                        </span>
                        <span className="text-xs text-black">{e.nivel}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="w-fit rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                    {c.tipoRespuesta.tipo}
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};
