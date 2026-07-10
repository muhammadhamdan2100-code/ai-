import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NodeNetwork } from "@/components/ui/NodeNetwork";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for reaching out to hamiaiworks — we'll be in touch shortly.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <NodeNetwork className="w-full h-full" />
      </div>
      <RevealOnScroll className="relative text-center max-w-lg mx-auto">
        <CheckCircle2 className="mx-auto text-accent-emerald" size={48} />
        <h1 className="mt-5 font-display text-2xl md:text-3xl font-semibold text-ink">
          Thanks — your message is in
        </h1>
        <p className="mt-4 text-ink-muted leading-relaxed">
          We&apos;ll follow up within one business day. If it&apos;s urgent, message us directly on
          WhatsApp and we&apos;ll usually reply within a few minutes.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            <Home size={18} />
            Back to Home
          </Button>
          <WhatsAppButton label="Chat on WhatsApp" size="lg" />
        </div>
        <Link
          href="/portfolio"
          className="mt-6 inline-block text-sm text-ink-muted hover:text-ink transition-colors"
        >
          Or take a look at our real work while you wait →
        </Link>
      </RevealOnScroll>
    </section>
  );
}
