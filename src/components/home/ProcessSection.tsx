import { PROCESS_STEPS } from "@/lib/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

/** Vertical timeline — a 9-step process reads better as a single connected
 * line than as a wrapping grid, and reinforces that each stage depends on
 * the one before it. */
export function ProcessSection() {
  return (
    <section className="section bg-base-soft/40">
      <div className="section-inner">
        <SectionHeading
          eyebrow="How we work"
          title="A nine-step process with no surprise phase"
          description="Every engagement follows this same sequence, from the first free call through ongoing support — because skipping the analysis or the design review is where automation projects usually go wrong."
        />

        <div className="mt-16 max-w-2xl mx-auto relative">
          {/* connecting vertical line */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-line" aria-hidden="true" />

          <div className="space-y-10">
            {PROCESS_STEPS.map((item, i) => (
              <RevealOnScroll key={item.step} delay={Math.min(i * 0.05, 0.4)}>
                <div className="relative flex gap-6">
                  <span className="relative z-10 font-mono text-sm text-accent-cyan bg-base border border-line rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    {item.step}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
