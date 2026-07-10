import type { Metadata } from "next";
import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { NodeNetwork } from "@/components/ui/NodeNetwork";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This page doesn't exist — let's get you back on track.",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <NodeNetwork className="w-full h-full" />
      </div>
      <div className="relative text-center max-w-lg mx-auto">
        <span className="font-display text-signal text-7xl md:text-8xl font-semibold">404</span>
        <h1 className="mt-4 font-display text-2xl md:text-3xl font-semibold text-ink">
          This page took a wrong turn
        </h1>
        <p className="mt-4 text-ink-muted leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back to
          something useful — or just message us directly if you were looking for something specific.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            <Home size={18} />
            Back to Home
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:gap-2.5 transition-all"
          >
            Contact us <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-6">
          <WhatsAppButton label="Chat on WhatsApp" variant="outline" />
        </div>
      </div>
    </section>
  );
}
