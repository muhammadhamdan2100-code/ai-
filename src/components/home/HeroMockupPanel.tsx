"use client";

import { motion } from "framer-motion";
import { Bot, User, CheckCheck } from "lucide-react";

/**
 * Purely illustrative device mockup showing what a WhatsApp AI conversation
 * looks like — generic example copy, no real numbers, names, or claims.
 * Exists to make the hero feel like a real product rather than a stock
 * gradient blob.
 */
export function HeroMockupPanel() {
  return (
    <div className="glass-strong rounded-xl2 p-4 md:p-5 w-full max-w-sm mx-auto shadow-glass">
      <div className="flex items-center gap-2 pb-3 border-b border-line mb-3">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="font-mono text-[11px] text-ink-faint">AI Agent · online</span>
      </div>

      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex items-start gap-2 justify-end"
        >
          <div className="bg-signal-gradient-soft border border-line rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[75%]">
            <p className="text-xs text-ink leading-relaxed">Can I book an appointment for tomorrow afternoon?</p>
          </div>
          <span className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
            <User size={12} className="text-ink-muted" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="flex items-start gap-2"
        >
          <span className="h-6 w-6 rounded-full bg-signal-gradient flex items-center justify-center shrink-0 mt-0.5">
            <Bot size={12} className="text-white" />
          </span>
          <div className="glass rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[75%]">
            <p className="text-xs text-ink leading-relaxed">
              You&apos;re booked for 3:00 PM tomorrow. I&apos;ve sent a confirmation — anything else?
            </p>
            <span className="flex items-center gap-1 mt-1.5 justify-end">
              <CheckCheck size={12} className="text-accent-cyan" />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
