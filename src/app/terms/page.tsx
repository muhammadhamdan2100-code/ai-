import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SITE } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the hamiaiworks website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: July 2026" />
      <section className="section !pt-0">
        <div className="section-inner max-w-2xl space-y-8 text-ink-muted leading-relaxed">
          <RevealOnScroll>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Use of this website</h2>
            <p>This website is provided for informational purposes about hamiaiworks&apos;s services. You agree not to misuse the site, attempt unauthorized access, or use its content for unlawful purposes.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Service engagements</h2>
            <p>Specific project scope, deliverables, timelines, and pricing for any automation build are governed by a separate written agreement between hamiaiworks and the client, not by this website alone.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Intellectual property</h2>
            <p>Content on this site — including case studies, diagrams, and copy — belongs to hamiaiworks unless otherwise noted, and may not be reproduced without permission.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Contact</h2>
            <p>Questions about these terms can be sent to <a href={`mailto:${SITE.email}`} className="text-accent-cyan hover:underline">{SITE.email}</a>.</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
