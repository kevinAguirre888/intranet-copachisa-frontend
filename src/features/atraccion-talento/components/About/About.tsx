import { MdEngineering, MdGroups, MdWorkHistory } from "react-icons/md";

const stats = [
    {
        icon: MdGroups,
        value: "+465 colaboradores.",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: MdWorkHistory,
        value: "+60 Años de experiencia",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        icon: MdEngineering,
        value: "+500 clientes satisfechos.",
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
];

const About = () => {
    return (
        <section id="nosotros" className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
                        Quiénes somos
                    </p>

                    <h2 className="mt-1 text-3xl/tight font-bold text-zinc-900 sm:text-4xl">
                        Nuestra historia, nuestro talento
                    </h2>

                    <p className="mt-4 text-lg text-pretty text-zinc-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div key={value} className="rounded-2xl border border-zinc-200 p-6">
                            <div className="inline-flex rounded-lg bg-amber-100 p-3 text-amber-700">
                                <Icon aria-hidden="true" className="size-6" />
                            </div>

                            <p className="mt-4 text-base font-bold text-zinc-900">{value}</p>

                            <p className="mt-1 text-zinc-600">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About;
