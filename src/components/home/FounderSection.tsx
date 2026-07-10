"use client";

import Image from "next/image";
import { Linkedin, Github, Mail, MessageCircle, ArrowUpRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SITE, getWhatsAppLink } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { solutions } from "@/lib/data/solutions";
import { services } from "@/lib/data/services";

// Derived directly from real, documented site content — not invented
// business metrics. Every number here equals an actual data set length.
const FOUNDER_STATS = [
  { value: projects.length, suffix: "", label: "Real Systems Documented" },
  { value: solutions.length, suffix: "", label: "Automation Solutions" },
  { value: services.length, suffix: "", label: "Core AI Services" },
];

const SKILLS = [
  "n8n Workflow Architecture",
  "OpenAI / GPT Integration",
  "WhatsApp Business Cloud API",
  "MongoDB Vector Search",
  "RAG Knowledge Systems",
  "CRM & Payment Automation",
  "Prompt Engineering",
  "Systems Design",
];

/**
 * Certifications are left empty by default — add entries here as
 * { name, issuer, year } once available; the section only renders
 * if this array is non-empty.
 */
const CERTIFICATIONS: { name: string; issuer: string; year: string }[] = [];

/**
 * Founder portrait: real photo inside an animated glow ring and a slowly
 * rotating dashed border. The photo itself is untouched aside from a
 * professional square crop and a light contrast/sharpness lift done at
 * build time — no stylization or cartoonizing.
 */
function FounderPortrait() {
  return (
    <div className="relative mx-auto h-56 w-56 md:h-72 md:w-72">
      <motion.div
        className="absolute -inset-3 rounded-full bg-signal-gradient opacity-60 blur-xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -inset-1.5 rounded-full border-2 border-dashed border-accent-cyan/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative h-full w-full rounded-full overflow-hidden glass-strong">
        <Image
          src="/images/founder.jpg"
          alt="Hamdan — Founder & AI Automation Engineer at hamiaiworks"
          fill
          sizes="(min-width: 768px) 288px, 224px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export function FounderSection() {
  return (
    <section className="section" id="founder">
      <div className="section-inner">
        <SectionHeading eyebrow="Meet the Founder" title="The Vision Behind hamiaiworks" />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 items-center">
          <RevealOnScroll className="md:col-span-2">
            <FounderPortrait />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="md:col-span-3 text-center md:text-left">
            <h3 className="font-display text-2xl font-semibold text-ink">Hamdan</h3>
            <p className="mt-1 eyebrow !text-accent-violet">Founder &amp; AI Automation Engineer</p>
            <p className="mt-5 text-ink-muted leading-relaxed">
              Hamdan founded hamiaiworks with a vision to help businesses automate repetitive work
              through enterprise-grade AI systems. Specializing in AI automation, WhatsApp AI agents,
              workflow engineering, and intelligent business solutions, he builds scalable systems that
              improve customer experience, increase efficiency, and drive business growth.
            </p>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[11px] text-ink-muted border border-line rounded-full px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Certifications — only renders if populated */}
            {CERTIFICATIONS.length > 0 && (
              <div className="mt-6 space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-2 text-sm text-ink-muted">
                    <Award size={14} className="text-accent-emerald shrink-0" />
                    <span>
                      {cert.name} — {cert.issuer} ({cert.year})
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-7 flex items-center justify-center md:justify-start gap-3">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass rounded-full p-2.5 text-ink-muted hover:text-accent-cyan hover:border-line-strong transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SITE.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass rounded-full p-2.5 text-ink-muted hover:text-accent-cyan hover:border-line-strong transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Email"
                className="glass rounded-full p-2.5 text-ink-muted hover:text-accent-cyan hover:border-line-strong transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="glass rounded-full p-2.5 text-ink-muted hover:text-accent-cyan hover:border-line-strong transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Button href="/contact">
                Work with Hamdan
                <ArrowUpRight size={16} />
              </Button>
              <WhatsAppButton label="Talk to an AI Expert" variant="outline" />
            </div>
          </RevealOnScroll>
        </div>

        {/* Animated founder stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {FOUNDER_STATS.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 0.06}>
              <div className="glass rounded-xl2 px-4 py-6 text-center">
                <div className="font-display text-2xl md:text-3xl font-semibold text-signal">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-[11px] text-ink-muted leading-snug">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
