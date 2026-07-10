import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AIReadinessQuiz } from "@/components/home/AIReadinessQuiz";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description: "A short, honest assessment of how ready your business is for AI automation, with a recommended next step.",
};

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Free assessment"
        title="How ready is your business for AI automation?"
        description="Six quick questions. No email required to see your result."
      />
      <section className="section !pt-0">
        <div className="section-inner">
          <AIReadinessQuiz />
        </div>
      </section>
    </>
  );
}
