import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FounderSection } from "@/components/home/FounderSection";
import { FounderMission } from "@/components/home/FounderMission";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Founder",
  description: "Meet Hamdan, Founder & AI Automation Engineer at hamiaiworks.",
};

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="Meet the Founder"
        description="The vision behind hamiaiworks."
      />
      <FounderSection />
      <FounderMission />
      <CTASection />
    </>
  );
}
