import { Outlet } from "react-router";
import bgHero from "@/assets/images/bg-seccion-hero.webp";


export const AuthLayout = () => {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-md">
        <Outlet />
        {/* <LoginForm /> */}
      </div>
    </main>
  );
};
