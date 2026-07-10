import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How hamiaiworks uses cookies on this website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie Policy" description="Last updated: July 2026" />
      <section className="section !pt-0">
        <div className="section-inner max-w-2xl space-y-8 text-ink-muted leading-relaxed">
          <RevealOnScroll>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">What we use cookies for</h2>
            <p>This site uses only essential, functional cookies needed for basic operation — we do not run third-party advertising trackers or sell browsing data.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Analytics</h2>
            <p>If analytics are enabled in the future, this policy will be updated to disclose exactly what&apos;s measured and how to opt out.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Managing cookies</h2>
            <p>You can disable cookies at any time through your browser settings. Doing so may affect some site functionality.</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
