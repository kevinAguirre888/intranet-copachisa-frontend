import { Link } from "react-router";
import { Button } from '@heroui/react';
import { MdMenu } from "react-icons/md";
import logoCopachisa from "@/assets/images/logo-copachisa-simbolo-blanco.png";

const navLinks = [
  { label: "Nosotros", to: "/#nosotros" },
  { label: "Vacantes", to: "/#vacantes" },
  { label: "Contacto", to: "/#contacto" },
];

const Header = () => {
  return (
    <header className="bg-zinc-950">
      <div className="mx-auto flex h-22 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block" to="/">
          <span className="sr-only">Inicio</span>
          <img src={logoCopachisa} alt="Logo Copachisa Simbolo" className="h-16 w-auto" />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-base font-medium">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    className="text-zinc-300 transition hover:text-zinc-300/75"
                    to={to}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                to="/#registro"
                className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-600 px-4 text-base font-medium text-white transition hover:bg-zinc-600/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
              >
                Regístrate
              </Link>
            </div>

            <Button isIconOnly aria-label="Abrir menú" className="md:hidden bg-zinc-600 rounded-md">
              <MdMenu />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;