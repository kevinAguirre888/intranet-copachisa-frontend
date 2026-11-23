import { MdAssignment, MdPeople, MdSchool, MdWork } from "react-icons/md";
import HomeHeader from "@/features/home/components/HomeHeader/HomeHeader";
import ModuleCard from "@/features/home/components/ModuleCard/ModuleCard";

const modules = [
  {
    title: "Evaluaciones 360",
    description: "Consulta y responde tus encuestas pendientes",
    icon: MdAssignment,
    to: "/evaluaciones",
  },
  {
    title: "Módulo 2",
    description: "Próximamente",
    icon: MdPeople,
    disabled: true,
  },
  {
    title: "Módulo 3",
    description: "Próximamente",
    icon: MdSchool,
    disabled: true,
  },
  {
    title: "Módulo 4",
    description: "Próximamente",
    icon: MdWork,
    disabled: true,
  },
];

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <main className="flex min-h-[calc(100vh-5.5rem)] items-center bg-zinc-200/75 px-4 py-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-6 text-left">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Encuestas
            </p>
            <h1 className="mt-1 text-3xl/tight font-bold text-zinc-900 sm:text-4xl">
              Encuestas disponibles
            </h1>
            <p className="mt-2 text-zinc-500">
              Selecciona una encuesta para comenzar
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {modules.map((module) => (
              <ModuleCard key={module.title} {...module} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;