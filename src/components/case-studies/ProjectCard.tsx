import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { AutomationProject } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { MockupFrame } from "@/components/ui/MockupFrame";
import Image from "next/image";

export function ProjectCard({ project }: { project: AutomationProject }) {
  return (
    <Link href={`/case-studies/${project.slug}`}>
      <GlassCard className="h-full group" glow="cyan">
        <div className="mb-6 rounded-lg overflow-hidden">
          {project.status === "live" && project.screenshot ? (
            <MockupFrame label={`n8n · ${project.title}`}>
              <Image
                src={project.screenshot}
                alt={`${project.title} — n8n workflow architecture`}
                width={project.screenshotWidth ?? 1553}
                height={project.screenshotHeight ?? 621}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </MockupFrame>
          ) : (
            <div className="relative aspect-[16/9] rounded-lg bg-gradient-to-br from-accent-violet/15 via-base-soft to-accent-cyan/10 border border-line flex flex-col items-center justify-center gap-2">
              <Clock size={20} className="text-ink-faint" />
              <span className="font-mono text-[11px] text-ink-faint">Architecture screenshot pending upload</span>
            </div>
          )}
        </div>
        <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">{project.category}</span>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 text-sm text-ink-muted leading-relaxed">{project.tagline}</p>
        <div className="mt-5 flex items-center gap-6 flex-wrap">
          {project.roi.slice(0, 2).map((m) => (
            <div key={m.label}>
              <div className="font-display text-lg font-semibold text-signal">
                {m.prefix}
                {m.value.toLocaleString()}
                {m.suffix}
              </div>
              <p className="text-[11px] text-ink-faint leading-snug max-w-[9rem]">{m.label}</p>
            </div>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan group-hover:gap-2.5 transition-all">
          View project breakdown <ArrowRight size={14} />
        </span>
      </GlassCard>
    </Link>
  );
}
