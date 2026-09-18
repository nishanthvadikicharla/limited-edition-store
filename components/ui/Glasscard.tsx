import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
      rounded-3xl
      border
      border-white/30
      bg-white/20
      backdrop-blur-xl
      shadow-xl
      p-5
      ${className}
      `}
    >
      {children}
    </div>
  );
}