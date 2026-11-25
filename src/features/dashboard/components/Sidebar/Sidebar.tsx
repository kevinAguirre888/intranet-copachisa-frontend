import { useState } from "react";
import { MdOutlineAssignment, MdOutlineDashboard } from "react-icons/md";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarSection, type SidebarSectionProps } from "./SidebarSection";
import { SidebarUser } from "./SidebarUser";

const iconClass = "size-5 shrink-0";

const sections: SidebarSectionProps[] = [
  {
    title: "General",
    items: [
      { label: "Resumen", icon: <MdOutlineDashboard className={iconClass} /> },
    ],
  },
  {
    title: "Administración",
    items: [
      {
        label: "Evaluaciones",
        icon: <MdOutlineAssignment className={iconClass} />,
        to: "/dashboard/evaluaciones",
      },
    ],
  },
];

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative z-50 h-screen w-20 shrink-0">
      <aside
        data-expanded={expanded}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setExpanded(false);
        }}
        className="group/sidebar absolute inset-y-0 left-0 flex w-20 flex-col overflow-hidden bg-zinc-950 transition-[width] duration-200 ease-out data-[expanded=true]:w-72 data-[expanded=true]:shadow-2xl"
      >
        <SidebarHeader />
        <nav
          aria-label="Principal"
          className="flex flex-1 flex-col gap-6 overflow-y-auto overflow-x-hidden p-4"
        >
          {sections.map((section) => (
            <SidebarSection key={section.title} {...section} />
          ))}
        </nav>
        <SidebarUser />
      </aside>
    </div>
  );
};
