import { ShieldCheck, Zap, Bot, MessageCircle, Workflow, Link2 } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const BADGES = [
  { icon: Zap, label: "24/7 AI Automation" },
  { icon: ShieldCheck, label: "Enterprise Security" },
  { icon: Bot, label: "OpenAI Powered" },
  { icon: MessageCircle, label: "WhatsApp Verified" },
  { icon: Workflow, label: "n8n Automation" },
  { icon: Link2, label: "CRM Integration" },
];

/** Row of premium trust badges — used on Pricing and Home. */
export function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      {BADGES.map((badge, i) => (
        <RevealOnScroll key={badge.label} delay={i * 0.04}>
          <div className="glass rounded-full px-4 py-2.5 flex items-center gap-2">
            <badge.icon size={15} className="text-accent-emerald" />
            <span className="text-xs font-medium text-ink-muted">{badge.label}</span>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
