import type { IconType } from "react-icons";
import { Link } from "react-router";

type ModuleCardProps = {
  title: string;
  description: string;
  icon: IconType;
  to?: string;
  disabled?: boolean;
};

const ModuleCard = ({
  title,
  description,
  icon: Icon,
  to,
  disabled = false,
}: ModuleCardProps) => {
  const content = (
    <>
      <span
        className={`inline-flex rounded-xl p-3 ${
          disabled ? "bg-zinc-100" : "bg-amber-100"
        }`}
      >
        <Icon
          size={24}
          className={disabled ? "text-zinc-400" : "text-amber-700"}
          aria-hidden="true"
        />
      </span>

      <div className="min-w-0">
        <p
          className={`whitespace-nowrap text-base font-bold ${
            disabled ? "text-zinc-500" : "text-zinc-900"
          }`}
        >
          {title}
        </p>
        <p className="mt-1 text-zinc-500">
          {description}
        </p>
      </div>
    </>
  );

  if (disabled) {
    return (
      <div
        aria-disabled="true"
        className="flex min-h-44 cursor-not-allowed flex-col items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-6 opacity-60"
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      to={to ?? "/"}
      className="flex min-h-44 flex-col items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-copachisa hover:shadow-md"
    >
      {content}
    </Link>
  );
};

export default ModuleCard;