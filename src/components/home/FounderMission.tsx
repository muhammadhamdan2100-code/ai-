import { Compass, Eye, HeartHandshake } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { GlassCard } from "@/components/ui/GlassCard";

const PILLARS = [
  {
    icon: Compass,
    title: "Mission",
    detail:
      "To help business owners automate the repetitive work that shouldn't need a person — reliably, transparently, and without locking them into a black box.",
  },
  {
    icon: Eye,
    title: "Vision",
    detail:
      "A future where every growing business has an AI employee handling its repetitive conversations and workflows, freeing its people for the work that actually needs them.",
  },
  {
    icon: HeartHandshake,
    title: "Commitment to clients",
    detail:
      "Every system is documented and handed over, not held hostage. If a workflow isn't ready to automate yet, that's what gets said — not a sale that isn't in the client's interest.",
  },
];

/** Narrative block for the Founder page: why hamiaiworks exists, told through mission/vision/commitment. */
export function FounderMission() {
  return (
    <section className="section !pt-0">
      <div className="section-inner">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow">Why hamiaiworks exists</span>
            <p className="mt-4 text-ink-muted text-base md:text-lg leading-relaxed">
              hamiaiworks started from a simple frustration: most automation projects fail not because
              the AI isn&apos;t capable, but because the workflow around it was never designed properly —
              built as a demo, not a system meant to survive contact with a real business. hamiaiworks
              exists to build the second kind.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <RevealOnScroll key={pillar.title} delay={i * 0.08}>
              <GlassCard glow="violet" className="h-full text-center">
                <pillar.icon className="mx-auto text-accent-violet" size={24} />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{pillar.detail}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
