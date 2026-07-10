import { Lock, KeyRound, ShieldCheck, FileLock2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PRACTICES = [
  {
    icon: KeyRound,
    title: "Secure API integrations",
    detail: "Every connection to your CRM, calendar, or payment provider uses authenticated, scoped API access — never shared or hard-coded credentials.",
  },
  {
    icon: ShieldCheck,
    title: "Permission-based workflows",
    detail: "Automations are scoped to only the data and actions they need. A workflow that answers product questions doesn't get access to payment details.",
  },
  {
    icon: Lock,
    title: "Business data confidentiality",
    detail: "Your conversations, documents, and customer data are never used to train shared models or shared with other clients.",
  },
  {
    icon: FileLock2,
    title: "Encrypted communication",
    detail: "Data in transit is encrypted using standard TLS across every integration we build — WhatsApp, CRM, calendar, and payment APIs alike.",
  },
];

export function SecuritySection() {
  return (
    <section className="section bg-base-soft/40">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Security & privacy"
          title="Built with your data's confidentiality in mind"
          description="We don't claim certifications we don't hold. Here's what we actually do on every engagement to keep your business data safe."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRACTICES.map((practice, i) => (
            <RevealOnScroll key={practice.title} delay={i * 0.06}>
              <GlassCard glow="cyan" className="h-full">
                <practice.icon className="text-accent-violet" size={22} />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{practice.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{practice.detail}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <p className="mt-8 text-center text-sm text-ink-faint max-w-2xl mx-auto leading-relaxed">
            If your project involves regulated data (health records, financial accounts, or similar),
            tell us during the discovery call — the architecture and access model get a dedicated
            security review before anything is connected to real data.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
