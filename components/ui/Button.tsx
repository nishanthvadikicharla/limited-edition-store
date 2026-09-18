"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  text,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const primary =
    "bg-[#214A35] text-white hover:bg-[#183727] shadow-lg";

  const secondary =
    "border-2 border-[#214A35] text-[#214A35] hover:bg-[#214A35] hover:text-white";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.96 }}
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
          variant === "primary" ? primary : secondary
        }`}
      >
        {text}
        <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}