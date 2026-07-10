"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  CalendarCheck,
  Workflow,
  TrendingUp,
  Clock,
  Bell,
  CheckCircle2,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

// All values below are static demonstration data — not connected to any
// real account or live system. Labeled clearly in the UI itself, not just
// in this comment.
const DEMO_CONVERSATIONS = [72, 58, 81, 64, 90, 76, 95];
const DEMO_LEADS = [
  { name: "New inquiry", status: "New", color: "bg-accent-cyan" },
  { name: "Qualified lead", status: "Qualified", color: "bg-accent-violet" },
  { name: "Appointment set", status: "Booked", color: "bg-accent-emerald" },
];
const DEMO_MESSAGES = [
  { text: "Can I reschedule my appointment?", time: "2m ago" },
  { text: "What are your business hours?", time: "6m ago" },
  { text: "Do you have this in stock?", time: "14m ago" },
];
const DEMO_TASKS = [
  { label: "Sync CRM contacts", done: true },
  { label: "Send follow-up sequence", done: true },
  { label: "Refresh knowledge base", done: false },
];

function DemoBadge() {
  return (
    <span className="font-mono text-[10px] uppercase tracking-wide text-accent-amber bg-accent-amber/10 border border-accent-amber/25 rounded-full px-2 py-0.5">
      Demo data
    </span>
  );
}

export function DashboardPreview() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Platform preview"
          title="What running your AI agent looks like"
          description="A sample dashboard with illustrative data — this is a preview of the interface, not a live account."
        />

        <div className="mt-14 glass-strong rounded-xl2 p-5 md:p-7">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-ink-faint">hamiaiworks · Dashboard preview</span>
            <DemoBadge />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Conversations chart */}
            <GlassCard interactive={false} className="col-span-2 lg:col-span-2 !p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-sm text-ink-muted">
                  <MessageSquare size={15} className="text-accent-cyan" /> Conversations this week
                </span>
              </div>
              <div className="flex items-end gap-2 h-20">
                {DEMO_CONVERSATIONS.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                    className="flex-1 rounded-t bg-signal-gradient opacity-80"
                  />
                ))}
              </div>
            </GlassCard>

            {/* Response time */}
            <GlassCard interactive={false} className="!p-5">
              <span className="flex items-center gap-2 text-sm text-ink-muted">
                <Clock size={15} className="text-accent-cyan" /> Avg. response
              </span>
              <p className="mt-3 font-display text-2xl font-semibold text-signal">3.8s</p>
            </GlassCard>

            {/* Automation runs */}
            <GlassCard interactive={false} className="!p-5">
              <span className="flex items-center gap-2 text-sm text-ink-muted">
                <Workflow size={15} className="text-accent-cyan" /> Automations run
              </span>
              <p className="mt-3 font-display text-2xl font-semibold text-signal">1,204</p>
            </GlassCard>

            {/* Lead status */}
            <GlassCard interactive={false} className="col-span-2 lg:col-span-2 !p-5">
              <span className="flex items-center gap-2 text-sm text-ink-muted mb-4">
                <TrendingUp size={15} className="text-accent-cyan" /> Lead status
              </span>
              <div className="space-y-2.5">
                {DEMO_LEADS.map((lead) => (
                  <div key={lead.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-ink-muted">
                      <span className={`h-1.5 w-1.5 rounded-full ${lead.color}`} />
                      {lead.name}
                    </span>
                    <span className="text-[11px] font-mono text-ink-faint">{lead.status}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Recent messages */}
            <GlassCard interactive={false} className="col-span-2 !p-5">
              <span className="flex items-center gap-2 text-sm text-ink-muted mb-4">
                <Bell size={15} className="text-accent-cyan" /> Recent messages
              </span>
              <div className="space-y-2.5">
                {DEMO_MESSAGES.map((m) => (
                  <div key={m.text} className="flex items-center justify-between gap-3">
                    <span className="text-xs text-ink-muted truncate">{m.text}</span>
                    <span className="text-[10px] font-mono text-ink-faint shrink-0">{m.time}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Calendar */}
            <GlassCard interactive={false} className="!p-5">
              <span className="flex items-center gap-2 text-sm text-ink-muted">
                <CalendarCheck size={15} className="text-accent-cyan" /> Appointments today
              </span>
              <p className="mt-3 font-display text-2xl font-semibold text-signal">14</p>
            </GlassCard>

            {/* Tasks */}
            <GlassCard interactive={false} className="!p-5">
              <span className="flex items-center gap-2 text-sm text-ink-muted mb-4">
                <CheckCircle2 size={15} className="text-accent-cyan" /> Workflow activity
              </span>
              <div className="space-y-2">
                {DEMO_TASKS.map((task) => (
                  <div key={task.label} className="flex items-center gap-2">
                    <span
                      className={`h-3.5 w-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        task.done ? "bg-accent-emerald/20 border-accent-emerald" : "border-line"
                      }`}
                    >
                      {task.done && <CheckCircle2 size={10} className="text-accent-emerald" />}
                    </span>
                    <span className="text-[11px] text-ink-faint">{task.label}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <p className="mt-6 text-center text-[11px] text-ink-faint">
            All numbers shown are sample data for illustration — your actual dashboard reflects your real
            account activity.
          </p>
        </div>
      </div>
    </section>
  );
}
