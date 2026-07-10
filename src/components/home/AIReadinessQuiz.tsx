"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, RotateCcw, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

interface QuizOption {
  label: string;
  points: number;
}

interface QuizQuestion {
  question: string;
  helper: string;
  options: QuizOption[];
}

const QUESTIONS: QuizQuestion[] = [
  {
    question: "How many people work at your business?",
    helper: "Business size",
    options: [
      { label: "Just me / under 5", points: 1 },
      { label: "5–20", points: 2 },
      { label: "21–50", points: 3 },
      { label: "50+", points: 4 },
    ],
  },
  {
    question: "What industry are you in?",
    helper: "Industry",
    options: [
      { label: "Healthcare, real estate, or law", points: 3 },
      { label: "E-commerce or retail", points: 4 },
      { label: "Agency or professional services", points: 3 },
      { label: "Something else", points: 2 },
    ],
  },
  {
    question: "Roughly how many customer inquiries do you get per week?",
    helper: "Customer volume",
    options: [
      { label: "Under 50", points: 1 },
      { label: "50–200", points: 2 },
      { label: "200–1,000", points: 3 },
      { label: "1,000+", points: 4 },
    ],
  },
  {
    question: "Do you have a dedicated support or admin team?",
    helper: "Support team",
    options: [
      { label: "No — it's handled ad hoc", points: 1 },
      { label: "1–2 people", points: 2 },
      { label: "3–10 people", points: 3 },
      { label: "10+ people", points: 4 },
    ],
  },
  {
    question: "What are you currently using to manage customers and workflow?",
    helper: "Current software",
    options: [
      { label: "Spreadsheets or nothing formal", points: 1 },
      { label: "A basic CRM", points: 2 },
      { label: "An established CRM plus a few tools", points: 3 },
      { label: "Multiple integrated systems", points: 4 },
    ],
  },
  {
    question: "What's the main thing you want automation to do?",
    helper: "Automation goals",
    options: [
      { label: "Save time on repetitive tasks", points: 3 },
      { label: "Improve response times", points: 3 },
      { label: "Scale without hiring", points: 4 },
      { label: "Get better data and insights", points: 2 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.points)), 0);

function getTier(percent: number) {
  if (percent < 45) {
    return {
      label: "Early stage",
      detail:
        "You're not far enough along yet to benefit from broad automation — but a single, well-scoped workflow (like FAQ handling or lead capture) is a low-risk place to start and prove the value.",
    };
  }
  if (percent < 75) {
    return {
      label: "Ready for a pilot",
      detail:
        "Your volume and setup suggest a scoped pilot project — one or two workflows — would show measurable impact within weeks, without a large upfront commitment.",
    };
  }
  return {
    label: "High readiness",
    detail:
      "Your business is a strong fit for a broader automation rollout across multiple workflows — the volume and complexity justify a more comprehensive build from the start.",
  };
}

export function AIReadinessQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const isDone = step >= QUESTIONS.length;
  const progress = Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100);

  function selectAnswer(points: number) {
    const next = [...answers, points];
    setAnswers(next);
    setStep(step + 1);
  }

  function reset() {
    setAnswers([]);
    setStep(0);
  }

  if (isDone) {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    const percent = Math.round((totalScore / MAX_SCORE) * 100);
    const tier = getTier(percent);

    return (
      <GlassCard interactive={false} className="max-w-xl mx-auto text-center px-8 py-10">
        <CheckCircle2 className="mx-auto text-accent-emerald" size={32} />
        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-accent-cyan">Your readiness score</p>
        <p className="mt-2 font-display text-5xl font-semibold text-signal">{percent}%</p>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">{tier.label}</h3>
        <p className="mt-3 text-sm text-ink-muted leading-relaxed">{tier.detail}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Book Free Consultation
            <ArrowUpRight size={16} />
          </Button>
          <WhatsAppButton label="Discuss Your Results" variant="outline" size="lg" />
        </div>
        <button
          onClick={reset}
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-ink-faint hover:text-ink-muted transition-colors"
        >
          <RotateCcw size={12} /> Retake the assessment
        </button>
      </GlassCard>
    );
  }

  const q = QUESTIONS[step];

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[11px] text-ink-faint">
            Question {step + 1} of {QUESTIONS.length}
          </span>
          <span className="font-mono text-[11px] text-accent-cyan">{progress}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-line overflow-hidden">
          <motion.div
            className="h-full bg-signal-gradient"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard interactive={false} className="px-6 py-8 md:px-8 md:py-10">
            <span className="font-mono text-[11px] uppercase tracking-wide text-accent-cyan">{q.helper}</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink">{q.question}</h3>
            <div className="mt-6 space-y-3">
              {q.options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => selectAnswer(option.points)}
                  className="w-full flex items-center justify-between gap-3 text-left glass rounded-lg px-4 py-3.5 hover:border-line-strong hover:bg-white/[0.06] transition-colors group"
                >
                  <span className="text-sm text-ink-muted group-hover:text-ink transition-colors">
                    {option.label}
                  </span>
                  <ArrowRight size={14} className="text-ink-faint group-hover:text-accent-cyan transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
