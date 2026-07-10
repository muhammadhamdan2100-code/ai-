"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SESSION_KEY = "hamiaiworks_exit_intent_shown";

/**
 * Fires once per browser session when the cursor exits the top of the
 * viewport (classic exit-intent signal on desktop). Skipped entirely on
 * touch devices, where there's no reliable equivalent signal.
 */
export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch devices

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // sessionStorage unavailable — fail open (won't show) rather than throw
      alreadyShown = true;
    }
    if (alreadyShown) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        setOpen(true);
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          /* ignore */
        }
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    }

    // small delay so it can't fire the instant the page loads
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full glass-strong rounded-xl2 p-8 text-center"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-ink-faint hover:text-ink transition-colors"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <>
                <Sparkles className="mx-auto text-accent-emerald" size={28} />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">You&apos;re on the list</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  We&apos;ll reach out to {email} to schedule your free AI audit shortly.
                </p>
              </>
            ) : (
              <>
                <Sparkles className="mx-auto text-accent-violet" size={28} />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  Before you go — get a free AI audit
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  We&apos;ll review your current workflow and tell you honestly what&apos;s worth automating first — no obligation.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="flex-1 bg-white/[0.05] border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet transition-colors"
                  />
                  <Button type="submit">
                    Get my audit
                    <ArrowUpRight size={16} />
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
