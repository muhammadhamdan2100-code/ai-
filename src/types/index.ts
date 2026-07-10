export interface Solution {
  slug: string;
  name: string;
  icon: string;
  idealFor: string;
  overview: string;
  problem: string;
  solution: string;
  workflow: { step: string; detail: string }[];
  features: string[];
  benefits: string[];
  roi: MetricStat[];
  techStack: string[];
}

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  heroTagline: string;
  overview: string;
  challenges: string[];
  aiSolutions: string[];
  workflow: { step: string; detail: string }[];
  benefits: string[];
  roi: MetricStat[];
  techStack: string[];
  faq: FaqItem[];
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string; // lucide-react icon name
  summary: string;
  description: string;
  outcomes: string[];
  workflow: { step: string; detail: string }[];
  stack: string[];
}

export interface MetricStat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel?: string;
  layer: "input" | "processing" | "logic" | "storage" | "output";
}

export interface ArchitectureEdge {
  from: string;
  to: string;
}

export interface AutomationProject {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: "live" | "pending-asset"; // pending-asset = screenshot not yet uploaded as a file
  screenshot: string | null; // path under /public, or null if pending
  screenshotWidth?: number;
  screenshotHeight?: number;
  overview: string;
  problem: string;
  solution: string;
  workflow: { step: string; detail: string }[];
  techStack: string[];
  features: string[];
  integrations: string[];
  benefits: string[];
  roi: MetricStat[];
  futureImprovements: string[];
}
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  badge?: string;
  setupPrice: string;
  monthlyPrice: string;
  audience: string;
  featureGroups: { groupLabel?: string; items: string[] }[];
  highlighted?: boolean;
  ctaLabel: string;
}

export interface ComparisonRow {
  feature: string;
  starter: boolean | string;
  standard: boolean | string;
  enterprise: boolean | string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}
