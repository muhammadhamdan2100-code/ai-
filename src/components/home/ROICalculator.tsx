"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Users, Clock, DollarSign, Percent, TrendingUp, ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/data/site";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

const WORKING_HOURS_PER_YEAR = 2080; // 40 hrs/week * 52 weeks — standard full-time baseline
const WEEKS_PER_MONTH = 4.33;

// Reference plan used to estimate ROI — the "Standard" tier, since it's the
// most commonly chosen. Actual cost depends on project scope; this is
// clearly labeled as an estimate, not a quote.
const REFERENCE_PLAN = PRICING_TIERS.find((t) => t.highlighted) ?? PRICING_TIERS[1];
const REFERENCE_MONTHLY_COST = parseFloat(REFERENCE_PLAN.monthlyPrice.replace(/[^0-9.]/g, ""));

export function ROICalculator() {
  const [employees, setEmployees] = useState(3);
  const [hoursSavedPerWeek, setHoursSavedPerWeek] = useState(8);
  const [avgSalary, setAvgSalary] = useState(45000);
  const [tasksAutomated, setTasksAutomated] = useState(60);

  const results = useMemo(() => {
    const hourlyRate = avgSalary / WORKING_HOURS_PER_YEAR;
    const effectiveHoursSavedPerWeek = hoursSavedPerWeek * (tasksAutomated / 100);
    const monthlyHoursSaved = employees * effectiveHoursSavedPerWeek * WEEKS_PER_MONTH;
    const monthlySavings = monthlyHoursSaved * hourlyRate;
    const annualSavings = monthlySavings * 12;
    const annualCost = REFERENCE_MONTHLY_COST * 12;
    const roiPercent = annualCost > 0 ? ((annualSavings - annualCost) / annualCost) * 100 : 0;

    return {
      monthlyHoursSaved: Math.round(monthlyHoursSaved),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roiPercent: Math.round(roiPercent),
    };
  }, [employees, hoursSavedPerWeek, avgSalary, tasksAutomated]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto items-start">
      {/* Inputs */}
      <GlassCard interactive={false} className="lg:col-span-3">
        <div className="space-y-7">
          <div>
            <label className="flex items-center justify-between text-sm text-ink-muted mb-3">
              <span className="flex items-center gap-2">
                <Users size={15} className="text-accent-cyan" /> Employees affected
              </span>
              <span className="font-mono text-ink">{employees}</span>
            </label>
            <input
              type="range"
              min={1}
              max={50}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full accent-accent-violet"
            />
          </div>

          <div>
            <label className="flex items-center justify-between text-sm text-ink-muted mb-3">
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-accent-cyan" /> Hours spent per employee / week on repetitive tasks
              </span>
              <span className="font-mono text-ink">{hoursSavedPerWeek} hrs</span>
            </label>
            <input
              type="range"
              min={1}
              max={30}
              value={hoursSavedPerWeek}
              onChange={(e) => setHoursSavedPerWeek(Number(e.target.value))}
              className="w-full accent-accent-violet"
            />
          </div>

          <div>
            <label className="flex items-center justify-between text-sm text-ink-muted mb-3">
              <span className="flex items-center gap-2">
                <DollarSign size={15} className="text-accent-cyan" /> Average annual salary
              </span>
              <span className="font-mono text-ink">{formatCurrency(avgSalary)}</span>
            </label>
            <input
              type="range"
              min={15000}
              max={150000}
              step={1000}
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              className="w-full accent-accent-violet"
            />
          </div>

          <div>
            <label className="flex items-center justify-between text-sm text-ink-muted mb-3">
              <span className="flex items-center gap-2">
                <Percent size={15} className="text-accent-cyan" /> Share of that work realistically automatable
              </span>
              <span className="font-mono text-ink">{tasksAutomated}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={tasksAutomated}
              onChange={(e) => setTasksAutomated(Number(e.target.value))}
              className="w-full accent-accent-violet"
            />
          </div>
        </div>
      </GlassCard>

      {/* Outputs */}
      <div className="lg:col-span-2 space-y-4">
        <GlassCard interactive={false} glow="cyan">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">Time saved / month</p>
          <motion.p
            key={results.monthlyHoursSaved}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 font-display text-3xl font-semibold text-signal"
          >
            {results.monthlyHoursSaved.toLocaleString()} hrs
          </motion.p>
        </GlassCard>

        <GlassCard interactive={false} glow="cyan">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">Estimated monthly savings</p>
          <motion.p
            key={results.monthlySavings}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 font-display text-3xl font-semibold text-signal"
          >
            {formatCurrency(results.monthlySavings)}
          </motion.p>
        </GlassCard>

        <GlassCard interactive={false} glow="violet">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">Estimated annual savings</p>
          <motion.p
            key={results.annualSavings}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 font-display text-3xl font-semibold text-signal"
          >
            {formatCurrency(results.annualSavings)}
          </motion.p>
        </GlassCard>

        <GlassCard interactive={false} glow="violet">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint flex items-center gap-1.5">
            <TrendingUp size={12} /> Estimated first-year ROI
          </p>
          <motion.p
            key={results.roiPercent}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 font-display text-3xl font-semibold text-signal"
          >
            {results.roiPercent > 0 ? "+" : ""}
            {results.roiPercent.toLocaleString()}%
          </motion.p>
          <p className="mt-2 text-[11px] text-ink-faint leading-relaxed">
            Based on a {REFERENCE_PLAN.name} plan ({REFERENCE_PLAN.monthlyPrice}). Your actual cost depends on
            project scope — this is an estimate, not a quote.
          </p>
        </GlassCard>

        <Button href="/contact" className="w-full">
          Get Your AI Roadmap
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </div>
  );
}
