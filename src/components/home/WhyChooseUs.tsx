import { Sparkles, Users, Building2, Layers, Cpu, HeartHandshake, MessageSquare, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const REASONS = [
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    detail: "We don't sell a fixed template. Every workflow is designed around your actual process, not the other way around.",
  },
  {
    icon: Building2,
    title: "Business-First Approach",
    detail: "We start with your operations and outcomes, not with the technology. The AI is the means, not the point.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    detail: "We build systems meant to be maintained and extended, and we stay involved after launch rather than disappearing once it ships.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    detail: "Every system is designed so new workflows can be added without rebuilding what already works.",
  },
  {
    icon: Cpu,
    title: "Modern AI Technology",
    detail: "We build on current, well-documented infrastructure — n8n, OpenAI, and standard business APIs — not experimental or proprietary black boxes.",
  },
  {
    icon: Users,
    title: "Human-Centered Automation",
    detail: "Escalation to a human is designed in from day one. Automation should remove repetitive work, not remove accountability.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    detail: "You get a documented architecture, not a black box — and clear, direct answers about what's realistic and what isn't.",
  },
  {
    icon: LifeBuoy,
    title: "Reliable Support",
    detail: "Post-launch tuning is part of every engagement, and continued support is available as your business and needs change.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Why choose hamiaiworks"
          title="A partner, not just a vendor"
          description="Automation only pays off if the system is built right and stays maintained. Here's how we approach that."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((reason, i) => (
            <RevealOnScroll key={reason.title} delay={(i % 4) * 0.06}>
              <GlassCard className="h-full" glow="violet">
                <div className="h-11 w-11 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan">
                  <reason.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{reason.detail}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
