import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { CheckCircle2, ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { industries, getIndustryBySlug } from "@/lib/data/industries";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return { title: industry.name, description: industry.heroTagline };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] ?? Sparkles;
  const otherIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Industry" title={industry.name} description={industry.heroTagline} />

      <section className="section !pt-0">
        <div className="section-inner grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <RevealOnScroll>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Industry overview</h2>
              <p className="text-ink-muted leading-relaxed">{industry.overview}</p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Business challenges</h2>
              <ul className="space-y-3">
                {industry.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-amber mt-2 shrink-0" />
                    <span className="text-sm text-ink-muted leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.05}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">AI solutions</h2>
              <ul className="space-y-3">
                {industry.aiSolutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-emerald mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-ink-muted leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Workflow</h2>
              <div className="space-y-4">
                {industry.workflow.map((step, i) => (
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
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Business benefits</h2>
              <ul className="space-y-3">
                {industry.benefits.map((b) => (
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
                  {industry.roi.map((m) => (
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
                  {industry.techStack.map((tech) => (
                    <span key={tech} className="font-mono text-[11px] text-ink-muted border border-line rounded-full px-2.5 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button href="/contact" className="mt-6 w-full">
                  Talk to us about {industry.name}
                  <ArrowUpRight size={16} />
                </Button>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <GlassCard interactive={false}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">Other industries</h3>
                <div className="space-y-2">
                  {otherIndustries.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/industries/${i.slug}`}
                      className="flex items-center justify-between text-sm text-ink-muted hover:text-ink transition-colors py-1.5"
                    >
                      {i.name}
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Industry-specific FAQ */}
      <section className="section bg-base-soft/40">
        <div className="section-inner max-w-3xl">
          <h2 className="text-center font-display text-2xl md:text-3xl font-semibold text-ink mb-10">
            {industry.name} FAQ
          </h2>
          <div className="space-y-3">
            {industry.faq.map((item) => (
              <div key={item.question} className="glass rounded-xl2 p-6">
                <h3 className="font-display text-base font-medium text-ink">{item.question}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
