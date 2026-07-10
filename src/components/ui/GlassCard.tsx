"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: "violet" | "cyan" | "none";
}

/**
 * Core glass surface used across the site: services, portfolio, testimonials.
 * When `interactive` is set, the card lifts and gains a colored glow on hover.
 */
export function GlassCard({
  children,
  className,
  interactive = true,
  glow = "violet",
}: GlassCardProps) {
  const glowClass =
    glow === "violet" ? "hover:shadow-glow-violet" : glow === "cyan" ? "hover:shadow-glow-cyan" : "";

  return (
    <motion.div
      whileHover={interactive ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "glass rounded-xl2 p-6 md:p-8",
        interactive && `hover:border-line-strong hover:bg-white/[0.06] ${glowClass}`,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
