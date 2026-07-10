import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectCard } from "@/components/case-studies/ProjectCard";
import { projects } from "@/lib/data/projects";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Deep dives into real AI automation systems built by hamiaiworks, with full architecture, workflow, and ROI breakdowns.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The architecture, the workflow, and the reasoning behind it"
        description="Each case study below walks through a real n8n build — the problem it solves, every step of the automation, the tech stack, and what it's expected to deliver."
      />

      <section className="section !pt-0">
        <div className="section-inner">
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
