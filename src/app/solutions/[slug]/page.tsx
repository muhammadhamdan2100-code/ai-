import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { CheckCircle2, ArrowUpRight, ArrowRight } from "lucide-react";
import { solutions, getSolutionBySlug } from "@/lib/data/solutions";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};
  return { title: solution.name, description: solution.overview };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[solution.icon] ?? Icons.Sparkles;
  const otherSolutions = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Solution" title={solution.name} description={solution.overview} />

      <div className="flex justify-center -mt-8 mb-4">
        <span className="font-mono text-xs text-accent-cyan glass rounded-full px-4 py-1.5">
          {solution.idealFor}
        </span>
      </div>

      <section className="section !pt-0">
        <div className="section-inner grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <RevealOnScroll>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">The business problem</h2>
              <p className="text-ink-muted leading-relaxed">{solution.problem}</p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Our AI solution</h2>
              <p className="text-ink-muted leading-relaxed">{solution.solution}</p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">How the workflow runs</h2>
              <div className="space-y-4">
                {solution.workflow.map((step, i) => (
                  <div key={step.step} className="glass rounded-xl2 p-5 flex gap-4">
                    <span className="font-mono text-sm text-accent-cyan bg-base border border-line rounded-full h-9 w-9 flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-ink">{step.step}</h3>
                      <p className="mt-1 text-sm text-ink-muted leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Features</h2>
              <ul className="space-y-3">
                {solution.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-emerald mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-ink-muted leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Business benefits</h2>
              <ul className="space-y-3">
                {solution.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-cyan mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-ink-muted leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          <div className="space-y-6">
            <RevealOnScroll>
              <GlassCard interactive={false}>
                <div className="h-12 w-12 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-mono text-xs uppercase tracking-wide text-ink-faint">Expected ROI</h3>
                <div className="mt-4 space-y-4">
                  {solution.roi.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-2xl font-semibold text-signal">
                        <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                      </div>
                      <p className="text-xs text-ink-muted mt-1 leading-snug">{m.label}</p>
                    </div>
                  ))}
                </div>
                <h3 className="mt-6 font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">Built on</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack.map((tech) => (
                    <span key={tech} className="font-mono text-[11px] text-ink-muted border border-line rounded-full px-2.5 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button href="/contact" className="mt-6 w-full">
                  Discuss this solution
                  <ArrowUpRight size={16} />
                </Button>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <GlassCard interactive={false}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">Explore other solutions</h3>
                <div className="space-y-2">
                  {otherSolutions.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/solutions/${s.slug}`}
                      className="flex items-center justify-between text-sm text-ink-muted hover:text-ink transition-colors py-1.5"
                    >
                      {s.name}
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
