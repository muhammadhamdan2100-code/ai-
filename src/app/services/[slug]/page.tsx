import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { CheckCircle2, ArrowUpRight, ArrowRight } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Service" title={service.name} description={service.description} />

      <section className="section !pt-0">
        <div className="section-inner grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {/* Workflow */}
            <RevealOnScroll>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">How the workflow runs</h2>
              <div className="space-y-4">
                {service.workflow.map((step, i) => (
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

            {/* Outcomes */}
            <RevealOnScroll delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">What it typically achieves</h2>
              <ul className="space-y-3">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-emerald mt-0.5 shrink-0" size={18} />
                    <span className="text-sm text-ink-muted leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <RevealOnScroll>
              <GlassCard interactive={false}>
                <div className="h-12 w-12 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-mono text-xs uppercase tracking-wide text-ink-faint">Built on</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-ink-muted border border-line rounded-full px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button href="/contact" className="mt-6 w-full">
                  Discuss this workflow
                  <ArrowUpRight size={16} />
                </Button>
              </GlassCard>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <GlassCard interactive={false}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">
                  Explore other services
                </h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between text-sm text-ink-muted hover:text-ink transition-colors py-1.5"
                    >
                      {s.shortName}
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
