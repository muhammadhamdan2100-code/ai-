import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { IntegrationsHub } from "@/components/home/IntegrationsHub";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Every platform and technology hamiaiworks genuinely builds with — searchable and categorized.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Built to work with what you already use"
        description="Every integration listed here is one we've genuinely built with — not an aspirational roadmap."
      />
      <section className="section !pt-0">
        <div className="section-inner">
          <IntegrationsHub />
        </div>
      </section>
      <CTASection />
    </>
  );
}
