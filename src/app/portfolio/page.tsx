import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectCard } from "@/components/case-studies/ProjectCard";
import { projects } from "@/lib/data/projects";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Real AI automation systems built by hamiaiworks — WhatsApp agents, ops automation, and enterprise AI platforms.",
};

export default function PortfolioPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Real systems, not concept mockups"
        description="Every project below is a real n8n architecture, documented from the actual workflow — not a generic template."
      />

      <section className="section !pt-0">
        <div className="section-inner">
          <RevealOnScroll>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <span
                  key={category}
                  className="font-mono text-xs border border-line rounded-full px-3 py-1.5 text-ink-muted"
                >
                  {category}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.slug} delay={(i % 2) * 0.08}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
