import { MdLogin } from "react-icons/md";

const LoginForm = () => {
  return (
    <form
      className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
      onSubmit={(event) => event.preventDefault()}
    >
      <h1 className="mb-6 text-center text-3xl font-bold text-zinc-900">
        Inicio de sesión
      </h1>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block font-medium text-zinc-700"
        >
          Correo electrónico
        </label>

        <input
          id="email"
          type="email"
          placeholder="correo@copachisa.com"
          className="w-full rounded-md border border-zinc-300 px-4 py-3 outline-none focus:border-copachisa"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="mb-2 block font-medium text-zinc-700"
        >
          Contraseña
        </label>

        <input
          id="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          className="w-full rounded-md border border-zinc-300 px-4 py-3 outline-none focus:border-copachisa"
        />
      </div>

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded bg-copachisa px-4 py-3 font-bold text-black transition hover:bg-copachisa/85"
      >
        <MdLogin size={22} />
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;