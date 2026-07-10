import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { solutions } from "@/lib/data/solutions";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Twelve AI automation solutions — from WhatsApp agents to custom AI agents — each with a clear workflow, features, and ROI.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · AI Employee Catalog"
        title="Twelve AI employees, ready to be configured for your business"
        description="Every solution below is a real automation pattern we build repeatedly — pick one to see who it's for, the workflow, features, and expected ROI."
      />

      <section className="section !pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[solution.icon] ?? Icons.Sparkles;
              return (
                <RevealOnScroll key={solution.slug} delay={(i % 3) * 0.06}>
                  <Link href={`/solutions/${solution.slug}`}>
                    <GlassCard className="h-full group" glow="violet">
                      <div className="h-11 w-11 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan group-hover:text-accent-violet transition-colors">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold text-ink">{solution.name}</h3>
                      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{solution.overview}</p>
                      <p className="mt-3 font-mono text-[11px] text-accent-cyan">{solution.idealFor}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan group-hover:gap-2.5 transition-all">
                        See workflow &amp; ROI <ArrowRight size={14} />
                      </span>
                    </GlassCard>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
