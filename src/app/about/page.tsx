import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CompanyValues } from "@/components/home/CompanyValues";
import { SecuritySection } from "@/components/home/SecuritySection";
import { ClientPortalPreview } from "@/components/home/ClientPortalPreview";
import { CTASection } from "@/components/home/CTASection";
import { Target, ShieldCheck, Gauge, Users, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/data/services";
import { solutions } from "@/lib/data/solutions";
import { industries } from "@/lib/data/industries";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "hamiaiworks helps business owners automate repetitive work with AI systems designed around how their business actually operates.",
};

const approach = [
  {
    icon: Target,
    title: "Automate the right 20%",
    detail:
      "We start every engagement by finding the highest-leverage workflow, not the flashiest one. Sometimes the honest answer is 'not yet.'",
  },
  {
    icon: ShieldCheck,
    title: "Escalation is a feature",
    detail:
      "Every workflow we ship has explicit rules for when a human takes over. An automation nobody trusts gets bypassed.",
  },
  {
    icon: Gauge,
    title: "Ship in weeks, not quarters",
    detail:
      "We work in demoable increments. You see a working system every 2–3 weeks, not a single reveal at the end of a long build.",
  },
  {
    icon: Users,
    title: "You own what we build",
    detail:
      "Documented architecture, handed-over access, no vendor lock-in. Many clients keep us on for tuning, but nothing is built to require it.",
  },
];

const trustReasons = [
  "Transparent communication — you always know what stage a project is in and what happens next",
  "Custom-built solutions — no forced templates that almost fit your process",
  "Clear documentation — every architecture is handed over in writing, not just tribal knowledge",
  "Professional development process — discovery, design review, and testing happen before anything goes live",
  "Scalable systems — new workflows can be added later without rebuilding what already works",
  "Modern technologies — built on current, well-documented infrastructure, not proprietary black boxes",
  "Long-term support — post-launch tuning is part of every engagement, not a separate upsell",
];

// Derived directly from real site content, not invented business metrics.
const stats = [
  { value: projects.length, suffix: "", label: "Real automation builds documented" },
  { value: solutions.length, suffix: "", label: "Automation solutions offered" },
  { value: industries.length, suffix: "", label: "Industries covered" },
  { value: services.length, suffix: "", label: "Core AI services" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We help businesses automate the work that shouldn't need a person"
        description="hamiaiworks was founded on a simple observation: most 'AI automation' fails not because the model is weak, but because the workflow around it was never designed properly. We fix that."
      />

      <section className="section !pt-0">
        <div className="section-inner max-w-3xl">
          <RevealOnScroll>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Who we help</h2>
            <p className="text-ink-muted text-base md:text-lg leading-relaxed">
              We work with business owners, founders, and operations teams — in healthcare, real estate,
              law, retail, and agencies — who are drowning in repetitive, well-defined work: order status
              questions, appointment booking, lead qualification, tier-1 support tickets. The work is rarely
              hard to describe. It&apos;s hard to automate reliably, at scale, without losing the trust of
              the team using it.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <h2 className="font-display text-xl font-semibold text-ink mt-10 mb-3">Problems we solve</h2>
            <p className="text-ink-muted text-base md:text-lg leading-relaxed">
              Missed messages during busy hours. Support tickets that repeat the same five questions
              every day. Leads that go cold because nobody followed up fast enough. Data entry that eats
              a rep&apos;s afternoon. None of these problems need more headcount — they need a system that
              handles the repetitive part reliably and knows exactly when to hand off to a person.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-xl font-semibold text-ink mt-10 mb-3">Our approach & philosophy</h2>
            <p className="text-ink-muted text-base md:text-lg leading-relaxed">
              Every engagement starts with an audit of what&apos;s actually happening today, not a generic
              automation template, and ends with a system your own team can read, trust, and maintain. We&apos;d
              rather tell you a workflow isn&apos;t ready to automate yet than force one in for the sake of a sale.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <h2 className="font-display text-xl font-semibold text-ink mt-10 mb-3">Our long-term vision</h2>
            <p className="text-ink-muted text-base md:text-lg leading-relaxed">
              We&apos;re building toward being a long-term automation partner for the businesses we work with —
              not a one-time vendor. As your operation grows, the systems we build should grow with it,
              without needing to be replaced.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section bg-base-soft/40">
        <div className="section-inner">
          <SectionHeading eyebrow="How we think" title="Four principles behind every build" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {approach.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.06}>
                <GlassCard glow="cyan" className="h-full">
                  <v.icon className="text-accent-violet" size={24} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{v.detail}</p>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CompanyValues />
      <SecuritySection />
      <ClientPortalPreview />

      {/* Why businesses trust us — process/documentation focused, no reviews */}
      <section className="section">
        <div className="section-inner max-w-2xl">
          <SectionHeading eyebrow="Why businesses trust us" title="Not reviews — just how we actually work" align="left" />
          <ul className="mt-10 space-y-4">
            {trustReasons.map((reason) => (
              <RevealOnScroll key={reason}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent-emerald mt-0.5 shrink-0" size={18} />
                  <span className="text-sm md:text-base text-ink-muted leading-relaxed">{reason}</span>
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 0.06}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-signal">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs text-ink-muted leading-snug">{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
