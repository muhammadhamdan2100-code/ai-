import type { Metadata } from "next";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { cn } from "@/lib/utils";
import { PRICING_TIERS, PRODUCT_DESCRIPTION, PRODUCT_POWERED_BY, SITE } from "@/lib/data/site";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Transparent pricing for ${SITE.productName} — Starter, Standard, and Enterprise plans.`,
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={`${SITE.productName} pricing`}
        description={PRODUCT_DESCRIPTION}
      />

      <section className="!pt-0 pb-8 px-6 md:px-10">
        <div className="section-inner">
          <RevealOnScroll>
            <p className="text-center text-xs font-mono uppercase tracking-wide text-ink-faint mb-4">
              Powered by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
              {PRODUCT_POWERED_BY.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] text-ink-muted border border-line rounded-full px-3 py-1.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {PRICING_TIERS.map((tier, i) => (
              <RevealOnScroll key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "rounded-xl2 p-8 h-full flex flex-col relative",
                    tier.highlighted
                      ? "glass-strong border-2 border-accent-violet/50 shadow-glow-violet"
                      : "glass"
                  )}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-signal-gradient text-white text-[11px] font-mono px-3 py-1 rounded-full whitespace-nowrap">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold text-ink">{tier.name}</h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed min-h-[3.5rem]">{tier.audience}</p>

                  <div className="mt-5 pt-5 border-t border-line space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[11px] uppercase text-ink-faint w-14">Setup</span>
                      <span className="font-display text-2xl font-semibold text-signal">{tier.setupPrice}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[11px] uppercase text-ink-faint w-14">Monthly</span>
                      <span className="font-display text-lg font-semibold text-ink">{tier.monthlyPrice}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex-1 space-y-5 max-h-[26rem] overflow-y-auto pr-1">
                    {tier.featureGroups.map((group) => (
                      <div key={group.groupLabel ?? "default"}>
                        {group.groupLabel && (
                          <p className="font-mono text-[11px] uppercase tracking-wide text-accent-cyan mb-2">
                            {group.groupLabel}
                          </p>
                        )}
                        <ul className="space-y-2.5">
                          {group.items.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5">
                              <Check className="text-accent-emerald mt-0.5 shrink-0" size={15} />
                              <span className="text-sm text-ink-muted leading-snug">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    {tier.ctaLabel}
                    <ArrowUpRight size={16} />
                  </Button>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.15}>
            <p className="mt-10 text-center text-sm text-ink-faint">
              All plans can be customized. Talk to us about multi-location, multi-brand, or franchise pricing.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section !pt-0">
        <div className="section-inner">
          <RevealOnScroll>
            <h2 className="text-center font-display text-2xl md:text-3xl font-semibold text-ink mb-10">
              Compare all plans
            </h2>
          </RevealOnScroll>
          <ComparisonTable />
        </div>
      </section>

      <section className="pb-20 px-6 md:px-10">
        <div className="section-inner">
          <TrustBadges />
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
}
