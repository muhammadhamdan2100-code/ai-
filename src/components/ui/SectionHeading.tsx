import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll>
      <div className={cn(align === "center" ? "text-center mx-auto max-w-2xl" : "text-left", className)}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-ink">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-ink-muted text-base md:text-lg leading-relaxed">{description}</p>
        )}
      </div>
    </RevealOnScroll>
  );
}
