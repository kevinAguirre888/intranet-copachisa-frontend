import { Link } from "react-router";
import logoCopachisa from "@/assets/images/logo-copachisa-simbolo-blanco.png";

const HomeHeader = () => {
  return (
    <header className="bg-zinc-950">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Ir al inicio">
          <img
            src={logoCopachisa}
            alt="Copachisa"
            className="h-16 w-auto"
          />
        </Link>

        <div
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-600 font-bold text-white"
          aria-label="Perfil de usuario FH"
        >
          FH
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;