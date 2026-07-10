import { Lightbulb, Eye, Gem, ShieldCheck, Lock, TrendingUp, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const VALUES = [
  { icon: Lightbulb, title: "Innovation", detail: "We build on current AI infrastructure and keep learning as the tools genuinely improve, not chasing every trend." },
  { icon: Eye, title: "Transparency", detail: "You get a documented architecture and a straight answer about what's realistic, not a black box or a sales pitch." },
  { icon: Gem, title: "Quality", detail: "Every workflow is tested against real scenarios before it touches a live customer conversation." },
  { icon: ShieldCheck, title: "Reliability", detail: "Systems are designed to degrade gracefully and escalate to a human rather than fail silently." },
  { icon: Lock, title: "Security", detail: "Access is scoped to what a workflow actually needs, and your data is never shared across clients." },
  { icon: TrendingUp, title: "Continuous Improvement", detail: "We monitor real usage after launch and keep tuning — automation is a maintained system, not a one-time delivery." },
  { icon: Heart, title: "Customer Success", detail: "We measure our own success by whether the automation actually gets used and trusted by your team." },
];

export function CompanyValues() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Company values" title="What guides how we build" />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map((value, i) => (
            <RevealOnScroll key={value.title} delay={(i % 4) * 0.06}>
              <GlassCard glow="violet" className="h-full">
                <value.icon className="text-accent-violet" size={22} />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{value.detail}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
