"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Wraps content in a scroll-triggered reveal: fades in and rises slightly
 * the first time it enters the viewport. Respects prefers-reduced-motion
 * via globals.css overriding animation/transition durations.
 */
export function RevealOnScroll({ children, delay = 0, y = 24, className }: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
