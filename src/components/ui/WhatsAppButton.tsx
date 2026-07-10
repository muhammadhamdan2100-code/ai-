import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/data/site";

/** Simple WhatsApp glyph (not in lucide-react) as an inline SVG. */
function WhatsAppGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.14-.14.31-.36.47-.55.16-.19.21-.32.31-.53.1-.21.05-.38-.03-.53-.09-.15-.66-1.58-.9-2.16-.24-.58-.49-.5-.67-.5-.17 0-.38-.02-.58-.02-.19 0-.51.07-.78.36-.26.29-1 1-1 2.4s1.03 2.77 1.17 2.96c.14.19 1.99 3.05 4.86 4.16 2.87 1.11 2.87.74 3.39.69.52-.05 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34ZM12.02 22h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79 1 1.01-3.7-.24-.38A9.86 9.86 0 0 1 2.05 12C2.04 6.5 6.53 2 12.03 2c2.65 0 5.14 1.03 7.01 2.91A9.83 9.83 0 0 1 22 12.02c0 5.5-4.5 9.98-9.98 9.98Zm8.47-18.44A11.82 11.82 0 0 0 12.03 0C5.4 0 .02 5.38.02 12.02c0 2.1.55 4.15 1.6 5.95L0 24l6.18-1.62A11.94 11.94 0 0 0 12.02 24h.01c6.63 0 12.01-5.38 12.01-12.02 0-3.2-1.25-6.22-3.55-8.42Z" />
    </svg>
  );
}

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Consistent WhatsApp CTA used across the site — Hero, About, Services,
 * Solutions, Industries, Portfolio, Case Studies, Pricing, Founder, Contact,
 * Footer, 404, and Thank You pages. Always opens wa.me with the standard
 * pre-filled consultation message unless a custom one is passed.
 */
export function WhatsAppButton({
  label = "Chat on WhatsApp",
  message,
  variant = "solid",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-emerald-400";

  const variants: Record<string, string> = {
    solid:
      "bg-emerald-500 text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:bg-emerald-400 hover:shadow-[0_8px_30px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98]",
    outline: "glass border border-emerald-500/40 text-ink hover:border-emerald-400 hover:bg-emerald-500/10",
    ghost: "text-emerald-400 hover:text-emerald-300",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <WhatsAppGlyph size={size === "lg" ? 20 : 16} />
      {label}
    </a>
  );
}
