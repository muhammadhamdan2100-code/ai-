import type { Metadata } from "next";
import { Mail, Phone, Clock, Timer, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/data/site";
import { ContactForm } from "@/components/home/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free consultation with hamiaiworks — tell us about your workflow and get a clear, honest project plan.",
};

const INFO_CARDS = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Business Hours", value: SITE.businessHours },
  { icon: Timer, label: "Response Time", value: SITE.responseTime },
];

const SOCIAL_BUTTONS = [
  { icon: Linkedin, label: "LinkedIn", href: SITE.social.linkedin },
  { icon: Facebook, label: "Facebook", href: SITE.social.facebook },
  { icon: Instagram, label: "Instagram", href: SITE.social.instagram },
  { icon: Github, label: "GitHub", href: SITE.social.github },
].filter((s) => !!s.href);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what's eating your team's time"
        description="Send a few details about your workflow and we'll follow up within one business day — or message us directly on WhatsApp if you'd rather talk it through now."
      />

      <section className="section !pt-0">
        <div className="section-inner grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <RevealOnScroll>
              <GlassCard interactive={false} className="p-8 md:p-10">
                <ContactForm />
              </GlassCard>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-2 space-y-5">
            {/* Dedicated WhatsApp contact card */}
            <RevealOnScroll>
              <GlassCard interactive={false} className="border-emerald-500/25 bg-emerald-500/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="h-11 w-11 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.14-.14.31-.36.47-.55.16-.19.21-.32.31-.53.1-.21.05-.38-.03-.53-.09-.15-.66-1.58-.9-2.16-.24-.58-.49-.5-.67-.5-.17 0-.38-.02-.58-.02-.19 0-.51.07-.78.36-.26.29-1 1-1 2.4s1.03 2.77 1.17 2.96c.14.19 1.99 3.05 4.86 4.16 2.87 1.11 2.87.74 3.39.69.52-.05 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34ZM12.02 22h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79 1 1.01-3.7-.24-.38A9.86 9.86 0 0 1 2.05 12C2.04 6.5 6.53 2 12.03 2c2.65 0 5.14 1.03 7.01 2.91A9.83 9.83 0 0 1 22 12.02c0 5.5-4.5 9.98-9.98 9.98Zm8.47-18.44A11.82 11.82 0 0 0 12.03 0C5.4 0 .02 5.38.02 12.02c0 2.1.55 4.15 1.6 5.95L0 24l6.18-1.62A11.94 11.94 0 0 0 12.02 24h.01c6.63 0 12.01-5.38 12.01-12.02 0-3.2-1.25-6.22-3.55-8.42Z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink">WhatsApp</h3>
                    <p className="text-sm text-ink-muted">{SITE.whatsapp}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-ink-faint">Usually replies within a few minutes</p>
                <WhatsAppButton label="Chat on WhatsApp" size="lg" className="mt-4 w-full" />
              </GlassCard>
            </RevealOnScroll>

            {INFO_CARDS.map((card, i) => (
              <RevealOnScroll key={card.label} delay={i * 0.05}>
                <GlassCard interactive={false}>
                  <card.icon className="text-accent-cyan" size={20} />
                  <h3 className="mt-4 font-display font-semibold text-ink">{card.label}</h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 text-sm text-ink-muted hover:text-ink transition-colors block"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-ink-muted">{card.value}</p>
                  )}
                </GlassCard>
              </RevealOnScroll>
            ))}

            <RevealOnScroll delay={0.25}>
              <GlassCard interactive={false}>
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-3">Follow us</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {SOCIAL_BUTTONS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="glass rounded-full p-2.5 text-ink-muted hover:text-accent-cyan hover:border-line-strong transition-colors"
                    >
                      <s.icon size={16} />
                    </a>
                  ))}
                </div>
              </GlassCard>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* What happens after you submit — reduces uncertainty for prospects */}
      <section className="section !pt-0">
        <div className="section-inner">
          <h2 className="text-center font-display text-2xl md:text-3xl font-semibold text-ink mb-4">
            What happens after you reach out
          </h2>
          <p className="text-center text-ink-muted max-w-xl mx-auto mb-12">
            No surprise sales call. Here&apos;s exactly what to expect.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "We respond",
                detail: `Within ${SITE.responseTime.toLowerCase()}, by email or WhatsApp — whichever you used to reach out.`,
              },
              {
                step: "02",
                title: "Discovery call",
                detail: "A free, no-obligation call to understand your workflow and what's actually costing you time.",
              },
              {
                step: "03",
                title: "Project plan",
                detail: "If it's a fit, you get a clear, written plan — scope, timeline, and price — before anything is signed.",
              },
              {
                step: "04",
                title: "Implementation",
                detail: "Build happens in demoable increments, with training and support built into the rollout.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={item.step} delay={i * 0.06}>
                <GlassCard interactive={false} className="h-full">
                  <span className="font-mono text-sm text-accent-cyan bg-base border border-line rounded-full h-9 w-9 flex items-center justify-center">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{item.detail}</p>
                </GlassCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}
