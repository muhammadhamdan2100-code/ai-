"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <SectionHeading
          eyebrow="What we build"
          title="Eight workflows. One automation partner."
          description="Each service below is a production system we've shipped more than once — not a proof of concept."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
            return (
              <RevealOnScroll key={service.slug} delay={(i % 4) * 0.06}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <GlassCard className="h-full flex flex-col group" glow="violet">
                    <div className="h-11 w-11 rounded-lg bg-signal-gradient-soft border border-line flex items-center justify-center text-accent-cyan group-hover:text-accent-violet transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink">{service.name}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">{service.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </GlassCard>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
