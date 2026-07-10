"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  User,
  CheckCheck,
  RotateCcw,
  UserCheck,
  CalendarCheck,
  Database,
  Mail,
  Play,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ChatMessage {
  from: "customer" | "ai";
  text: string;
  /** Which progress stage completes right after this message appears */
  completesStage?: number;
}

const SCRIPT: ChatMessage[] = [
  { from: "customer", text: "Hi, do you handle appointment bookings for consultations?" },
  { from: "ai", text: "Yes! I can check availability and book you in. Could I get your name and what you're looking for?" },
  { from: "customer", text: "I'm Sara, I run a 12-person clinic and we're looking to automate patient booking." },
  { from: "ai", text: "Got it, Sara — a 12-person clinic is a great fit for this. I've logged you as a qualified lead.", completesStage: 0 },
  { from: "customer", text: "Great. Can we do Thursday at 2pm?" },
  { from: "ai", text: "Thursday 2:00 PM works — you're booked in.", completesStage: 1 },
  { from: "ai", text: "I've also added this to the calendar and synced your details to the CRM.", completesStage: 2 },
  { from: "ai", text: "A confirmation email is on its way to you now. Anything else I can help with?", completesStage: 3 },
];

const STAGES = [
  { icon: UserCheck, label: "Lead Qualified" },
  { icon: CalendarCheck, label: "Appointment Booked" },
  { icon: Database, label: "CRM Updated" },
  { icon: Mail, label: "Email Sent" },
];

type PlaybackState = "idle" | "playing" | "done";

/**
 * Fully client-side scripted simulation — not a recording of a real
 * customer. Clearly labeled as such so it can never be mistaken for a
 * real conversation or a verified outcome.
 */
export function AIChatDemo() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [thinking, setThinking] = useState(false);
  const [state, setState] = useState<PlaybackState>("idle");
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  function play() {
    setVisibleCount(0);
    setCompletedStages([]);
    setThinking(false);
    setState("playing");
  }

  useEffect(() => {
    if (state !== "playing") return;
    if (visibleCount >= SCRIPT.length) {
      setState("done");
      return;
    }

    const next = SCRIPT[visibleCount];
    // AI turns pause on a "thinking" indicator before the bubble appears; customer turns appear a bit faster.
    const thinkDelay = next.from === "ai" ? 900 : 300;

    if (next.from === "ai") setThinking(true);

    const timer = setTimeout(() => {
      setThinking(false);
      setVisibleCount((c) => c + 1);
      if (typeof next.completesStage === "number") {
        setCompletedStages((prev) => [...prev, next.completesStage as number]);
      }
    }, thinkDelay);

    return () => clearTimeout(timer);
  }, [state, visibleCount]);

  const messages = SCRIPT.slice(0, visibleCount);

  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="See it in action"
          title="What a booking conversation looks like"
          description="A scripted simulation illustrating the flow — not a recording of a real customer conversation."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-4xl mx-auto">
          {/* Chat window */}
          <div className="lg:col-span-3 glass-strong rounded-xl2 overflow-hidden">
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-line bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[11px] text-ink-faint">AI Agent · Simulated demo</span>
              </div>
              <button
                onClick={play}
                className="inline-flex items-center gap-1.5 text-[11px] font-mono text-accent-cyan hover:text-accent-violet transition-colors"
              >
                {state === "idle" ? (
                  <>
                    <Play size={12} /> Play
                  </>
                ) : (
                  <>
                    <RotateCcw size={12} /> Replay
                  </>
                )}
              </button>
            </div>

            <div className="p-4 md:p-5 min-h-[22rem] flex flex-col justify-end gap-3">
              {state === "idle" && messages.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-10">
                  <Bot className="text-ink-faint" size={28} />
                  <p className="text-xs text-ink-faint max-w-xs">
                    Press play to watch a simulated booking conversation from start to finish.
                  </p>
                </div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-2 ${m.from === "customer" ? "justify-end" : ""}`}
                  >
                    {m.from === "ai" && (
                      <span className="h-6 w-6 rounded-full bg-signal-gradient flex items-center justify-center shrink-0 mt-0.5">
                        <Bot size={12} className="text-white" />
                      </span>
                    )}
                    <div
                      className={
                        m.from === "customer"
                          ? "bg-signal-gradient-soft border border-line rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]"
                          : "glass rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[80%]"
                      }
                    >
                      <p className="text-xs md:text-sm text-ink leading-relaxed">{m.text}</p>
                      {m.from === "customer" && (
                        <span className="flex items-center gap-1 mt-1 justify-end">
                          <CheckCheck size={12} className="text-accent-cyan" />
                        </span>
                      )}
                    </div>
                    {m.from === "customer" && (
                      <span className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <User size={12} className="text-ink-muted" />
                      </span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {thinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-6 w-6 rounded-full bg-signal-gradient flex items-center justify-center shrink-0">
                    <Bot size={12} className="text-white" />
                  </span>
                  <div className="glass rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-ink-faint"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Progress stepper */}
          <div className="lg:col-span-2 glass rounded-xl2 p-5 md:p-6">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-5">
              What&apos;s happening behind the scenes
            </p>
            <div className="space-y-4">
              {STAGES.map((stage, i) => {
                const done = completedStages.includes(i);
                return (
                  <div key={stage.label} className="flex items-center gap-3">
                    <span
                      className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                        done
                          ? "bg-accent-emerald/15 border-accent-emerald text-accent-emerald"
                          : "bg-white/[0.02] border-line text-ink-faint"
                      }`}
                    >
                      <stage.icon size={15} />
                    </span>
                    <span className={`text-sm transition-colors duration-300 ${done ? "text-ink" : "text-ink-faint"}`}>
                      {stage.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-[11px] text-ink-faint leading-relaxed">
              This is a scripted illustration of the workflow — not a live system or a recorded
              customer interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
