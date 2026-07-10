import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NodeNetwork } from "@/components/ui/NodeNetwork";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

/** Compact hero banner used at the top of every interior page. */
export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden pt-16 md:pt-24 pb-14 md:pb-20 px-6 md:px-10", className)}>
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <NodeNetwork className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base pointer-events-none" />
      <div className="relative mx-auto max-w-content text-center">
        <RevealOnScroll>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-ink leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-ink-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
