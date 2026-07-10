import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/case-studies/ProjectCard";
import { projects } from "@/lib/data/projects";

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Real work"
          title="Systems we've actually shipped"
          description="Real n8n architectures — not concept diagrams. Every project links to the full workflow breakdown."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/portfolio" variant="secondary">
            View full portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
