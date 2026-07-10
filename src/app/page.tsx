import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { AIChatDemo } from "@/components/home/AIChatDemo";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WorkflowVisualizer } from "@/components/home/WorkflowVisualizer";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { TechStack } from "@/components/home/TechStack";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "AI Automation Agency for WhatsApp, Voice & CRM Workflows",
  description:
    "hamiaiworks builds production AI automation — WhatsApp agents, voice AI, chatbots, and CRM pipelines — for teams that would rather scale conversations than headcount.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AIChatDemo />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <WorkflowVisualizer />
      <PortfolioSection />
      <TechStack />
      <DashboardPreview />
      <GlobalPresence />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
