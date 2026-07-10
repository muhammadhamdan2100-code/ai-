import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NodeNetwork } from "@/components/ui/NodeNetwork";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const TRUST_POINTS = ["Free consultation", "Transparent project planning", "Ongoing support after launch"];

export function CTASection() {
  return (
    <section className="section">
      <div className="section-inner">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-xl2 glass-strong px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <NodeNetwork className="w-full h-full" />
            </div>
            <div className="relative">
              <span className="eyebrow">Ready when you are</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight max-w-2xl mx-auto">
                Let&apos;s find the 20% of your workflow eating 80% of your team&apos;s time.
              </h2>
              <p className="mt-5 text-ink-muted max-w-xl mx-auto">
                Book a 30-minute call. We&apos;ll tell you honestly what&apos;s worth automating first —
                no obligation, no generic pitch deck.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                <Button href="/contact" size="lg">
                  Schedule AI Strategy Session
                  <ArrowUpRight size={18} />
                </Button>
                <Button href="/pricing" variant="secondary" size="lg">
                  See pricing
                </Button>
                <WhatsAppButton label="Get Free Consultation" variant="outline" size="lg" />
              </div>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {TRUST_POINTS.map((point) => (
                  <span key={point} className="inline-flex items-center gap-1.5 text-xs text-ink-faint">
                    <CheckCircle2 size={13} className="text-accent-emerald" />
                    {point}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <Link
                  href="/roi-calculator"
                  className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:gap-1.5 transition-all"
                >
                  Try the ROI Calculator <ArrowRight size={11} />
                </Link>
                <Link
                  href="/ai-readiness-assessment"
                  className="inline-flex items-center gap-1 text-xs text-accent-cyan hover:gap-1.5 transition-all"
                >
                  Take the AI Readiness Assessment <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
