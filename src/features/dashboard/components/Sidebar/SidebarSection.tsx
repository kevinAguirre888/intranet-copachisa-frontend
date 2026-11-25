import type { ReactNode } from "react";
import { NavLink } from "react-router";
import { Button, buttonVariants } from "@heroui/react";

const baseClass =
  "justify-start gap-3 rounded-lg border border-transparent px-3.5 text-sm font-medium";
const inactiveClass =
  "bg-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white";
const labelClass =
  "whitespace-nowrap opacity-0 transition-opacity group-data-[expanded=true]/sidebar:opacity-100";
const activeClass = "border-zinc-800 bg-zinc-900 text-white";

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  to?: string;
}

const SidebarItem = ({ label, icon, to }: SidebarItemProps) => {
  if (!to) {
    return (
      <Button
        variant="ghost"
        fullWidth
        className={`${baseClass} ${inactiveClass}`}
      >
        {icon}
        <span className={labelClass}>{label}</span>
      </Button>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${buttonVariants({ variant: "ghost", fullWidth: true })} ${baseClass} ${
          isActive ? activeClass : inactiveClass
        }`
      }
    >
      {icon}
      <span className={labelClass}>{label}</span>
    </NavLink>
  );
};

export interface SidebarSectionProps {
  title: string;
  items: SidebarItemProps[];
}

export const SidebarSection = ({ title, items }: SidebarSectionProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="whitespace-nowrap px-3 pb-1 text-xs font-medium text-zinc-500 opacity-0 transition-opacity group-data-[expanded=true]/sidebar:opacity-100">
        {title}
      </h2>
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.label}>
            <SidebarItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
