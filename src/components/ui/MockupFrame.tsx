import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MockupFrameProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

/**
 * Wraps a screenshot in a browser-window chrome frame — traffic-light dots
 * and a mock URL bar — so real product/workflow screenshots read as a
 * polished device mockup rather than a bare image. Never crops or stretches
 * the image itself; the frame just sits around it.
 */
export function MockupFrame({ children, label = "n8n.hamiaiworks.com/workflow", className }: MockupFrameProps) {
  return (
    <div className={cn("rounded-xl2 overflow-hidden glass-strong", className)}>
      {/* browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="font-mono text-[11px] text-ink-faint bg-white/[0.03] rounded-full px-3 py-1 truncate max-w-xs">
            {label}
          </span>
        </div>
      </div>
      {/* screenshot content, never stretched */}
      <div className="bg-[#0a0e17]">{children}</div>
    </div>
  );
}
