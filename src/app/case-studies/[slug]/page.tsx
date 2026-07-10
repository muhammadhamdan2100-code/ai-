import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight, ArrowRight, Film, Sparkles } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { MockupFrame } from "@/components/ui/MockupFrame";
import { Lightbox } from "@/components/ui/Lightbox";
import { CTASection } from "@/components/home/CTASection";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} description={project.tagline} />

      <section className="section !pt-0">
        <div className="section-inner">
          {/* Hero image: real screenshot in a mockup frame, or a pending-asset notice */}
          <RevealOnScroll>
            <div className="mb-14">
              {project.status === "live" && project.screenshot ? (
                <MockupFrame label={`n8n · ${project.title}`}>
                  <Lightbox
                    src={project.screenshot}
                    alt={`${project.title} — full n8n workflow architecture`}
                    width={project.screenshotWidth ?? 1553}
                    height={project.screenshotHeight ?? 621}
                  />
                </MockupFrame>
              ) : (
                <div className="relative aspect-[21/9] rounded-xl2 glass flex flex-col items-center justify-center gap-3">
                  <Sparkles className="text-ink-faint" size={22} />
                  <p className="font-mono text-xs text-ink-faint text-center max-w-sm px-6">
                    Real architecture screenshot for this build hasn&apos;t been uploaded as a file yet —
                    it&apos;ll appear here framed the same way once it is.
                  </p>
                </div>
              )}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-14">
              {/* Overview */}
              <RevealOnScroll>
                <h2 className="font-display text-2xl font-semibold text-ink mb-4">Project overview</h2>
                <p className="text-ink-muted leading-relaxed">{project.overview}</p>
              </RevealOnScroll>

              {/* Problem */}
              <RevealOnScroll delay={0.05}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-4">The problem</h2>
                <p className="text-ink-muted leading-relaxed">{project.problem}</p>
              </RevealOnScroll>

              {/* Solution */}
              <RevealOnScroll delay={0.05}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-4">The AI solution</h2>
                <p className="text-ink-muted leading-relaxed">{project.solution}</p>
              </RevealOnScroll>

              {/* Workflow */}
              <RevealOnScroll delay={0.1}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">Automation workflow</h2>
                <div className="space-y-4">
                  {project.workflow.map((step, i) => (
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

              {/* Features */}
              <RevealOnScroll delay={0.1}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent-emerald mt-0.5 shrink-0" size={18} />
                      <span className="text-sm text-ink-muted leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>

              {/* Business benefits */}
              <RevealOnScroll delay={0.1}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">Business benefits</h2>
                <ul className="space-y-3">
                  {project.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent-cyan mt-0.5 shrink-0" size={18} />
                      <span className="text-sm text-ink-muted leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>

              {/* Gallery placeholder */}
              <RevealOnScroll delay={0.1}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-lg glass flex items-center justify-center"
                    >
                      <span className="font-mono text-[10px] text-ink-faint text-center px-2">
                        Additional screenshot slot {i}
                      </span>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Demo video placeholder */}
              <RevealOnScroll delay={0.1}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">Demo video</h2>
                <div className="aspect-video rounded-xl2 glass flex flex-col items-center justify-center gap-3">
                  <Film className="text-ink-faint" size={28} />
                  <span className="font-mono text-xs text-ink-faint">Walkthrough video coming soon</span>
                </div>
              </RevealOnScroll>

              {/* Future improvements */}
              <RevealOnScroll delay={0.1}>
                <h2 className="font-display text-2xl font-semibold text-ink mb-6">Future improvements</h2>
                <ul className="space-y-3">
                  {project.futureImprovements.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ArrowRight className="text-accent-violet mt-0.5 shrink-0" size={16} />
                      <span className="text-sm text-ink-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RevealOnScroll>
                <GlassCard interactive={false}>
                  <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-5">
                    Expected ROI
                  </h3>
                  <div className="space-y-5">
                    {project.roi.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-2xl font-semibold text-signal">
                          <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                        </div>
                        <p className="text-xs text-ink-muted mt-1 leading-snug">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <Button href="/contact" className="mt-6 w-full">
                    Get a build like this
                    <ArrowUpRight size={16} />
                  </Button>
                </GlassCard>
              </RevealOnScroll>

              <RevealOnScroll delay={0.06}>
                <GlassCard interactive={false}>
                  <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">
                    Technology stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-ink-muted border border-line rounded-full px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </RevealOnScroll>

              <RevealOnScroll delay={0.08}>
                <GlassCard interactive={false}>
                  <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">
                    Integrations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.integrations.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] text-accent-cyan border border-line rounded-full px-2.5 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <GlassCard interactive={false}>
                  <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">
                    More projects
                  </h3>
                  <div className="space-y-2">
                    {otherProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/case-studies/${p.slug}`}
                        className="flex items-center justify-between text-sm text-ink-muted hover:text-ink transition-colors py-1.5"
                      >
                        {p.title}
                        <ArrowRight size={14} />
                      </Link>
                    ))}
                  </div>
                </GlassCard>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
