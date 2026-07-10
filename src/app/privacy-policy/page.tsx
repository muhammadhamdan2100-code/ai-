import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SITE } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How hamiaiworks collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: July 2026" />
      <section className="section !pt-0">
        <div className="section-inner max-w-2xl space-y-8 text-ink-muted leading-relaxed">
          <RevealOnScroll>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Information we collect</h2>
            <p>When you contact us through our website, WhatsApp, or booking forms, we collect the information you provide directly — such as your name, email, phone number, company, and project details.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">How we use it</h2>
            <p>We use this information to respond to inquiries, schedule consultations, deliver proposals, and — with your consent — send updates about our services. We do not sell your information to third parties.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Data retention & security</h2>
            <p>We retain contact information only as long as needed for the purpose it was collected, and take reasonable technical and organizational measures to protect it against unauthorized access.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.15}>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Your rights</h2>
            <p>You can request access to, correction of, or deletion of your personal information at any time by emailing us at <a href={`mailto:${SITE.email}`} className="text-accent-cyan hover:underline">{SITE.email}</a>.</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
