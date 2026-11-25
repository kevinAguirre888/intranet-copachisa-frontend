import logoCopachisa from "@/assets/images/logo-copachisa-simbolo-blanco.png";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center gap-3 border-b border-zinc-800 px-5 py-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900">
        <img
          src={logoCopachisa}
          alt="Logo Copachisa"
          className="size-7 object-contain"
        />
      </div>
      <span className="whitespace-nowrap text-lg font-semibold text-white opacity-0 transition-opacity group-data-[expanded=true]/sidebar:opacity-100">
        Copachisa
      </span>
    </div>
  );
};
