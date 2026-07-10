import {
  FolderKanban,
  PackageCheck,
  Ticket,
  NotebookText,
  Receipt,
  FileText,
  GraduationCap,
  Activity,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PORTAL_AREAS = [
  { icon: FolderKanban, label: "Project Progress" },
  { icon: PackageCheck, label: "Deliverables" },
  { icon: Ticket, label: "Support Tickets" },
  { icon: NotebookText, label: "Meeting Notes" },
  { icon: Receipt, label: "Invoices" },
  { icon: FileText, label: "Documentation" },
  { icon: GraduationCap, label: "Training Resources" },
  { icon: Activity, label: "Automation Status" },
];

/**
 * A conceptual preview only — not a working feature. Every visual cue here
 * (dimmed cards, "Coming soon" badge, disabled cursor) is deliberate so it
 * can't be mistaken for something live.
 */
export function ClientPortalPreview() {
  return (
    <section className="section bg-base-soft/40">
      <div className="section-inner">
        <SectionHeading
          eyebrow="What's next"
          title="A client portal, in planning"
          description="A single place to track project progress, deliverables, and support — currently a concept, not yet available. Shown here so you know what's coming."
        />

        <RevealOnScroll>
          <div className="mt-14 relative max-w-3xl mx-auto">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="font-mono text-[11px] uppercase tracking-wide text-accent-amber bg-accent-amber/10 border border-accent-amber/25 rounded-full px-3 py-1">
                Concept preview · Not yet available
              </span>
            </div>
            <div className="glass-strong rounded-xl2 p-6 md:p-8 opacity-70 grayscale-[0.3] cursor-not-allowed select-none">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {PORTAL_AREAS.map((area) => (
                  <div
                    key={area.label}
                    className="glass rounded-lg p-4 flex flex-col items-center gap-2 text-center"
                  >
                    <area.icon size={18} className="text-ink-faint" />
                    <span className="text-[11px] text-ink-faint">{area.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
