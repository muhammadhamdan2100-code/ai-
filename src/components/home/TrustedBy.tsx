import { BUILT_FOR } from "@/lib/data/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

/** Honest "who we build for" strip — audience segments, never claimed client logos. */
export function TrustedBy() {
  return (
    <section className="px-6 md:px-10 py-10 border-y border-line">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-ink-faint mb-8">
            Built for business owners and teams like these
          </p>
        </RevealOnScroll>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {BUILT_FOR.map((segment, i) => (
            <RevealOnScroll key={segment} delay={i * 0.05}>
              <span className="glass rounded-full px-4 py-2 font-display text-sm text-ink-muted hover:text-ink hover:border-line-strong transition-colors">
                {segment}
              </span>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
