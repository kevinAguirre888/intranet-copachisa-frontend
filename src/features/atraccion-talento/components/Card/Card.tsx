import { Link } from "react-router";
import { Card as HeroCard } from "@heroui/react";
import { MdLocationOn } from "react-icons/md";
import type { CardProps } from "../../types/atraccionTalento.types";


const Card = ({area, titulo, ubicacion, descripcion, perfil}: CardProps) => {
    return (
        <HeroCard className="gap-3 p-6">
            <HeroCard.Header className="items-start gap-2">
                <span className="w-fit rounded-full bg-copachisa/20 px-3 py-1 text-sm font-bold text-zinc-900">
                    {area}
                </span>

                <HeroCard.Title className="text-2xl font-bold text-zinc-900">
                    {titulo}
                </HeroCard.Title>
            </HeroCard.Header>

            <HeroCard.Content className="gap-4">
                <p className="flex items-center gap-2 text-zinc-600">
                    <MdLocationOn aria-hidden="true" className="size-5 shrink-0 text-red-500" />
                    {ubicacion}
                </p>

                <p className="text-lg text-pretty text-zinc-900">{descripcion}</p>

                <details>
                    <summary className="cursor-pointer text-lg font-bold text-zinc-900">
                        Ver perfil
                    </summary>

                    {perfil?.length ? (
                        <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-600">
                            {perfil.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                </details>
            </HeroCard.Content>

            <HeroCard.Footer>
                <Link
                    to="/#registro"
                    className="rounded-lg bg-copachisa px-6 py-2 font-bold text-zinc-900 hover:bg-copachisa/85"
                >
                    Postularme
                </Link>
            </HeroCard.Footer>
        </HeroCard>
    )
}

export default Card;
