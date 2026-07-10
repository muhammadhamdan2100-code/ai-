"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";

/** Sticky bottom-left consultation CTA — pairs with FloatingWhatsApp on the opposite corner. */
export function StickyBookCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="fixed bottom-5 left-5 md:bottom-7 md:left-7 z-40 hidden sm:block"
    >
      <Link
        href="/contact"
        className="flex items-center gap-2 rounded-full bg-signal-gradient text-white pl-4 pr-5 py-3 text-sm font-medium shadow-glow-violet hover:shadow-[0_0_45px_rgba(110,91,255,0.55)] hover:scale-[1.03] transition-all"
      >
        <CalendarClock size={17} />
        Book Free Consultation
      </Link>
    </motion.div>
  );
}
