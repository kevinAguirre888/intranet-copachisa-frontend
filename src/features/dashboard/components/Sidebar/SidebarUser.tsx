import { Avatar } from "@heroui/react";

export const SidebarUser = () => {
  return (
    <div className="border-t border-zinc-800 p-4 overflow-hidden">
      <div className="flex items-center gap-3 rounded-lg border border-transparent p-0 transition-colors group-data-[expanded=true]/sidebar:border-zinc-800 group-data-[expanded=true]/sidebar:bg-zinc-900 group-data-[expanded=true]/sidebar:p-2">
        <Avatar size="md" className="shrink-0 rounded-lg">
          <Avatar.Fallback className="rounded-lg">JD</Avatar.Fallback>
        </Avatar>
        <div className="min-w-0 whitespace-nowrap opacity-0 transition-opacity group-data-[expanded=true]/sidebar:opacity-100">
          <p className="truncate text-sm font-medium text-white">Juan Díaz</p>
          <p className="truncate text-xs text-zinc-500">
            juan.diaz@copachisa.com
          </p>
        </div>
      </div>
    </div>
  );
};
