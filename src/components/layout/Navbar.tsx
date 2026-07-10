"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Linkedin, Github } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-glass" : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-content px-6 md:px-10 flex items-center justify-between h-18 py-4 gap-4">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink shrink-0">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-signal-gradient" />
          {SITE.name}
        </Link>

        <div className="hidden lg:flex items-center gap-5 overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ink whitespace-nowrap",
                pathname === link.href ? "text-ink" : "text-ink-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={SITE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-accent-cyan transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={SITE.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-muted hover:text-accent-cyan transition-colors"
          >
            <Github size={16} />
          </a>
          <Button href="/contact" size="sm">
            Book Consultation
            <ArrowUpRight size={16} />
          </Button>
        </div>

        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden glass-strong border-t border-line"
          >
            <div className="px-6 py-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-muted hover:text-accent-cyan transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={SITE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-muted hover:text-accent-cyan transition-colors">
                  <Github size={18} />
                </a>
              </div>
              <Button href="/contact" className="mt-2">
                Book Consultation
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
