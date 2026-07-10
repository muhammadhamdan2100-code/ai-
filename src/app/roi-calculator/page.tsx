import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ROICalculator } from "@/components/home/ROICalculator";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Estimate the hours and cost your business could save by automating repetitive work with AI.",
};

export default function ROICalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="ROI Calculator"
        title="Estimate what automation could save you"
        description="Adjust the numbers below to fit your team. This gives a directional estimate — a discovery call gets you a real one."
      />
      <section className="section !pt-0">
        <div className="section-inner">
          <ROICalculator />
        </div>
      </section>
      <CTASection />
    </>
  );
}
