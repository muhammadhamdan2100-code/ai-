"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

/**
 * Replaces what used to be a testimonials carousel. We don't have verified
 * client testimonials yet, so rather than inventing quotes, this highlights
 * real, documented builds instead — each one links through to its full
 * case study with the actual architecture and workflow.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = projects[index];

  const next = () => setIndex((i) => (i + 1) % projects.length);
  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Featured builds"
          title="Real systems, documented from the actual architecture"
          description="No client quotes here yet — just the real builds, so you can judge the work directly."
        />

        <div className="mt-14 max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <GlassCard interactive={false} className="text-center px-8 py-10 md:px-12 md:py-12">
                <span className="font-mono text-[11px] uppercase tracking-wide text-accent-cyan">
                  {current.category}
                </span>
                <p className="mt-4 text-lg md:text-xl text-ink leading-relaxed font-display">
                  {current.title}
                </p>
                <p className="mt-4 text-sm text-ink-muted leading-relaxed">{current.tagline}</p>
                <Link
                  href={`/case-studies/${current.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:gap-2.5 transition-all"
                >
                  View the full breakdown <ArrowRight size={14} />
                </Link>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="glass rounded-full p-2.5 text-ink-muted hover:text-ink hover:border-line-strong transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-signal-gradient" : "w-1.5 bg-line-strong"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next project"
              className="glass rounded-full p-2.5 text-ink-muted hover:text-ink hover:border-line-strong transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
