"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Bot,
  BookOpen,
  Database,
  CalendarDays,
  Mail,
  Hash,
  BarChart3,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FLOW = [
  { icon: MessageCircle, label: "WhatsApp", detail: "A customer message arrives on WhatsApp." },
  { icon: Bot, label: "AI Agent", detail: "The agent classifies intent and decides how to respond." },
  { icon: BookOpen, label: "Knowledge Base", detail: "Relevant answers are retrieved from your docs and policies." },
  { icon: Database, label: "CRM", detail: "The contact record updates automatically with the interaction." },
  { icon: CalendarDays, label: "Google Calendar", detail: "Availability is checked and a booking is confirmed." },
  { icon: Mail, label: "Email", detail: "A confirmation email sends automatically." },
  { icon: Hash, label: "Slack", detail: "Your team is notified in Slack if anything needs attention." },
  { icon: BarChart3, label: "Analytics", detail: "The interaction is logged for reporting and trends." },
];

/**
 * Interactive, labeled version of the automation chain — distinct from the
 * decorative NodeNetwork background. Each node is hoverable/tappable for
 * detail, with particles animating along the connecting line to suggest
 * live data flow.
 */
export function WorkflowVisualizer() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section bg-base-soft/40">
      <div className="section-inner">
        <SectionHeading
          eyebrow="How data actually moves"
          title="One conversation, eight connected systems"
          description="Hover or tap any step to see what happens there. This is the same chain used across our real WhatsApp agent builds."
        />

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="flex items-start gap-1 min-w-[900px] lg:min-w-0 lg:justify-between px-2">
            {FLOW.map((node, i) => (
              <div key={node.label} className="flex items-center flex-1">
                <button
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(active === i ? null : i)}
                  className="flex flex-col items-center gap-3 group shrink-0 w-24"
                >
                  <motion.span
                    animate={{
                      scale: active === i ? 1.12 : 1,
                      borderColor: active === i ? "rgba(110,91,255,0.8)" : "rgba(255,255,255,0.08)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="h-14 w-14 rounded-full glass-strong border flex items-center justify-center text-accent-cyan group-hover:text-accent-violet"
                  >
                    <node.icon size={22} />
                  </motion.span>
                  <span className="text-[11px] font-mono text-ink-muted text-center leading-tight">
                    {node.label}
                  </span>
                </button>

                {/* connector with animated particle */}
                {i < FLOW.length - 1 && (
                  <div className="relative flex-1 h-px bg-line mx-1 mt-[-1.75rem] overflow-visible">
                    <motion.span
                      className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-accent-cyan"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        <div className="mt-8 max-w-lg mx-auto text-center min-h-[3.5rem]">
          {active !== null ? (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-ink-muted"
            >
              <span className="text-ink font-medium">{FLOW[active].label}:</span> {FLOW[active].detail}
            </motion.p>
          ) : (
            <p className="text-sm text-ink-faint">Hover or tap a step above to see what happens there.</p>
          )}
        </div>
      </div>
    </section>
  );
}
