import { Link } from "react-router";
import bgHero from "@/assets/images/bg-seccion-hero.webp";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center lg:grid lg:h-240 lg:place-content-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto w-screen max-w-7xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8 lg:py-24">
        <div className="max-w-3xl text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            <strong className="text-amber-400">Construimos</strong> grandes proyectos.{" "}
            <strong className="text-amber-400">Desarrollamos</strong>
            <br className="hidden lg:block" />{" "}
            grandes talentos.
          </h1>

          <p className="mt-4 text-lg text-pretty font-bold text-gray-200 sm:text-xl/relaxed.">
            Nuestra experiencia y compromiso con la calidad se reflejan en cada proyecto.
            Hoy queremos que tu talento forme parte de nuestra historia.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link
              to="/#vacantes"
              className="rounded bg-amber-400 px-6 py-3 font-bold text-black shadow-sm transition-colors hover:bg-amber-500"
            >
              Explorar vacantes
            </Link>
            
            <Link
              to="/#registro"
              className="rounded bg-zinc-100 px-6 py-3 font-bold text-black shadow-sm transition-colors hover:bg-zinc-300"
            >
              Unirme a la base de talento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;