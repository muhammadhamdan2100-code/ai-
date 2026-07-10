"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { NodeNetwork } from "@/components/ui/NodeNetwork";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroMockupPanel } from "@/components/home/HeroMockupPanel";
import { SITE } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { solutions } from "@/lib/data/solutions";
import { industries } from "@/lib/data/industries";

// Derived directly from real site content — these numbers can't drift out
// of sync with what's actually built, because they're the actual counts.
const heroStats = [
  { value: services.length, suffix: "", label: "Core AI services" },
  { value: solutions.length, suffix: "", label: "Automation solutions" },
  { value: industries.length, suffix: "", label: "Industries covered" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  // Background drifts opposite to the cursor; the mockup panel drifts with it — a subtle parallax pair.
  const bgX = useTransform(springX, [-0.5, 0.5], [12, -12]);
  const bgY = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const panelX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const panelY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24 px-6 md:px-10"
    >
      {/* Signature animated node-network backdrop, with subtle mouse parallax */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 opacity-40 pointer-events-none">
        <NodeNetwork className="w-full h-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base pointer-events-none" />

      <div className="relative mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono text-accent-cyan">
            <Sparkles size={13} />
            Currently accepting new automation projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-center font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-ink"
        >
          Build AI Employees
          <br />
          <span className="text-signal-animated">That Work 24/7.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-center text-ink-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {SITE.productName} transforms WhatsApp into an intelligent business assistant capable of
          customer support, lead generation, appointment booking, sales automation, CRM integration,
          payment collection, and business intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4"
        >
          <Button href="/contact" size="lg">
            Book Free AI Strategy Call
            <ArrowUpRight size={18} />
          </Button>
          <Button href="/solutions" variant="secondary" size="lg">
            See AI Solutions
          </Button>
          <WhatsAppButton label="Chat on WhatsApp" variant="outline" size="lg" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-center text-xs text-ink-faint"
        >
          Free, no-obligation call · Straight answers, no generic pitch deck
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl2 px-6 py-6 text-center">
              <div className="font-display text-3xl md:text-4xl font-semibold text-signal">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs text-ink-muted leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          style={{ x: panelX, y: panelY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-14 hidden md:block"
        >
          <HeroMockupPanel />
        </motion.div>
      </div>
    </section>
  );
}
