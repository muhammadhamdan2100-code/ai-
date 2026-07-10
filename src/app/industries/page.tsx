import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { industries } from "@/lib/data/industries";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI automation built for your industry — healthcare, real estate, retail, finance, and eight more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Automation built around how your industry actually works"
        description="Every industry has different constraints on what can and can't be automated — pick yours to see the challenges, AI solutions, and ROI specific to it."
      />

      <section className="section !pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] ?? Icons.Sparkles;
              return (
                <RevealOnScroll key={industry.slug} delay={(i % 3) * 0.06}>
                  <Link href={`/industries/${industry.slug}`}>
                    <GlassCard className="h-full group" glow="cyan">
                      <div className="h-11 w-11 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan group-hover:text-accent-violet transition-colors">
                        <Icon size={20} />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold text-ink">{industry.name}</h3>
                      <p className="mt-2 text-sm text-ink-muted leading-relaxed">{industry.heroTagline}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan group-hover:gap-2.5 transition-all">
                        See how it applies <ArrowRight size={14} />
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
