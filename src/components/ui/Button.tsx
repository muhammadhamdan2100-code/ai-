import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
}

/**
 * Shared CTA button. Renders as a Link when `href` is provided,
 * otherwise as a native button (for form submits, etc).
 *
 * Includes a subtle diagonal shimmer sweep on hover (primary variant only)
 * and an optional loading state that swaps content for a spinner while
 * keeping the button's dimensions stable.
 */
export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  loading = false,
  disabled = false,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-violet overflow-hidden isolate disabled:opacity-60 disabled:pointer-events-none";

  const variants: Record<string, string> = {
    primary:
      "bg-signal-gradient text-white shadow-glow-violet hover:shadow-[0_0_55px_rgba(110,91,255,0.5)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:-z-10 before:translate-x-[-120%] before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent hover:before:translate-x-[120%] before:transition-transform before:duration-700",
    secondary:
      "glass text-ink hover:bg-white/[0.08] hover:border-line-strong hover:scale-[1.015] active:scale-[0.985]",
    ghost: "text-ink-muted hover:text-ink hover:scale-[1.015] active:scale-[0.985]",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = loading ? (
    <>
      <Loader2 size={16} className="animate-spin" />
      <span className="opacity-80">Please wait…</span>
    </>
  ) : (
    children
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled || loading}>
      {content}
    </button>
  );
}
