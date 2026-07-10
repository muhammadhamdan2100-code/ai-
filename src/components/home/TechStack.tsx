"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  const doubled = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="section overflow-hidden">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Under the hood"
          title="Built on tools your engineers already trust"
          description="No proprietary black boxes — every workflow is built on documented, industry-standard infrastructure."
        />
      </div>

      <div className="mt-14 relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-base to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-base to-transparent z-10" />
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="glass rounded-full px-5 py-3 flex items-center gap-3 whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal-gradient" />
              <span className="font-display text-sm font-medium text-ink">{tech.name}</span>
              <span className="font-mono text-[11px] text-ink-faint">{tech.category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
