import { MdWhatsapp } from "react-icons/md";


const Contacto = () => {
    return (
        <section id="contacto" className="py-12 bg-zinc-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="mt-1 text-3xl/tight font-bold text-white sm:text-4xl">
                        Hablemos de tu futuro
                    </h2>

                    <p className="mt-4 text-lg text-pretty text-zinc-400">
                        Equipo de Atracción de Talento.
                    </p>

                    <p className="mt-4 text-lg font-bold text-zinc-400">
                        Melody Viramontes.
                    </p>

                    <p className="mt-4 text-lg text-pretty text-zinc-400">
                        614 212 1259.
                    </p>

                    <p className="mt-4 text-lg text-pretty font-base text-zinc-400">
                        Correo institucional:{" "}
                        <a
                            href="mailto:mviramontes@copachisa.com"
                            className="underline hover:text-white focus-visible:text-white"
                        >
                            mviramontes@copachisa.com
                        </a>
                    </p>

                    <a
                        href={`https://wa.me/526142121259?text=${encodeURIComponent(
                            "Hola, me interesa conocer las vacantes de Copachisa."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex h-10 w-fit items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 font-bold text-zinc-900 transition hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    >
                        <MdWhatsapp size={20} aria-hidden="true" />
                        Contactar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contacto;