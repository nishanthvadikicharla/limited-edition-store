import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
}

export default function Badge({
  icon,
  title,
}: Props) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      rounded-full
      bg-white
      px-5
      py-3
      shadow-xl
      border
      border-gray-100
      "
    >
      {icon}

      <span className="text-sm font-semibold">
        {title}
      </span>
    </div>
  );
}