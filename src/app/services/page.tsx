import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { services } from "@/lib/data/services";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WhatsApp AI agents, voice AI, chatbots, CRM automation, email automation, lead generation, customer support AI, and AI consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight automation workflows, built to production"
        description="Every service below is a system we've shipped for real clients — pick one to see exactly how it works, what it's built on, and what it typically achieves."
      />

      <section className="section !pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
              return (
                <RevealOnScroll key={service.slug} delay={(i % 2) * 0.08}>
                  <Link href={`/services/${service.slug}`}>
                    <GlassCard className="h-full group" glow="violet">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 shrink-0 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-ink">{service.name}</h3>
                          <p className="mt-2 text-sm text-ink-muted leading-relaxed">{service.summary}</p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {service.stack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[11px] text-ink-faint border border-line rounded-full px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan group-hover:gap-2.5 transition-all">
                        See how it works <ArrowRight size={14} />
                      </span>
                    </GlassCard>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
