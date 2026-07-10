import type { FaqItem, PricingTier, BlogPost, ComparisonRow } from "@/types";

export const SITE = {
  name: "hamiaiworks",
  productName: "hamiaiworks AI Agent",
  tagline: "Building Intelligent AI Employees for Modern Businesses.",
  description:
    "hamiaiworks AI Agent transforms WhatsApp into an intelligent business assistant capable of customer support, lead generation, appointment booking, sales automation, CRM integration, payment collection, and business intelligence.",
  url: "https://hamiaiworks.com",
  email: "muhammadhamdan2100@gmail.com",
  whatsapp: "+92 321 8602034",
  whatsappLink: "https://wa.me/923218602034",
  whatsappNumber: "923218602034",
  phone: "+92 321 8602034",
  location: "Remote-first · Serving clients worldwide",
  businessHours: "Mon–Sat, 10:00 AM – 7:00 PM (PKT)",
  responseTime: "Within 1 business day",
  social: {
    linkedin: "https://www.linkedin.com/in/hamiaiworks/",
    facebook: "https://www.facebook.com/hamiaiworks",
    instagram: "https://www.instagram.com/hamiaiworks?igsh=MTVvZDI3aTVjZWQ5dw==",
    github: "https://github.com/muhammadhamdan2100-code",
    tiktok: "https://tiktok.com/@hamiaiworks",
  },
};

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/founder", label: "Founder" },
  { href: "/blog", label: "Blog" },
];

// Audience segments we design for — not client names. See TrustedBy.tsx.
export const BUILT_FOR = [
  "Business Owners",
  "Founders & SMBs",
  "Healthcare",
  "Real Estate",
  "Law Firms",
  "Agencies",
  "E-Commerce",
];

// Only technologies genuinely used — either evidenced directly in the real
// n8n project architectures (see lib/data/projects.ts) or genuinely part of
// this site's own build.
export const TECHNOLOGIES = [
  { name: "n8n", category: "Orchestration" },
  { name: "OpenAI", category: "Language models" },
  { name: "WhatsApp Business API", category: "Messaging" },
  { name: "MongoDB", category: "Storage & vector search" },
  { name: "PostgreSQL", category: "Relational storage" },
  { name: "Google Workspace", category: "Business tools" },
  { name: "Google Calendar", category: "Scheduling" },
  { name: "Gmail", category: "Email" },
  { name: "Google Sheets", category: "Data backup" },
  { name: "Stripe", category: "Payments" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Vercel", category: "Deployment" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    detail:
      "A free, no-obligation conversation to understand your business, your current workflow, and what's actually costing you time — before we propose anything.",
  },
  {
    step: "02",
    title: "Business Analysis",
    detail:
      "We map your existing tools, data flows, and manual bottlenecks in detail, so any recommendation is grounded in how your business actually operates today.",
  },
  {
    step: "03",
    title: "AI Strategy",
    detail:
      "We identify which parts of your operation are genuinely worth automating first, ranked by impact and effort, and outline the approach in plain language.",
  },
  {
    step: "04",
    title: "Workflow Design",
    detail:
      "We design the exact conversation flows, data model, and system architecture — reviewed with you before a single line of production code is written.",
  },
  {
    step: "05",
    title: "Development",
    detail:
      "We build against the approved design in short, demoable increments, so you see real progress every step of the way, not just at the very end.",
  },
  {
    step: "06",
    title: "Testing",
    detail:
      "Every workflow is tested against real scenarios — including edge cases and failure modes — before it ever touches a live customer conversation.",
  },
  {
    step: "07",
    title: "Deployment",
    detail:
      "We roll out in a controlled phase, with human-in-the-loop review during ramp-up and clear escalation rules defined from day one.",
  },
  {
    step: "08",
    title: "Training",
    detail:
      "We walk your team through how the system works, how to read its outputs, and how to adjust it — so you're never dependent on us to understand your own automation.",
  },
  {
    step: "09",
    title: "Ongoing Support",
    detail:
      "We monitor real conversations, tune the knowledge base, and report on outcomes. Automation is a maintained system, not a one-time delivery.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does a typical automation project take?",
    answer:
      "Most single-workflow builds (like a WhatsApp agent or a CRM automation) ship in 6–9 weeks from kickoff to live rollout. Larger, multi-workflow engagements are phased so you see working results every 2–3 weeks rather than one big reveal at the end.",
  },
  {
    question: "Do you replace our existing tools, or work with them?",
    answer:
      "We work with what you have wherever possible. Automation sits on top of your CRM, calendar, and support tools via their APIs — we rarely ask a client to migrate systems just to automate around them.",
  },
  {
    question: "What happens when the AI doesn't know the answer?",
    answer:
      "Every workflow we build has explicit escalation rules defined before launch — low-confidence answers, sensitive topics, and anything outside scope route to a human automatically, with full context attached so nothing has to be repeated.",
  },
  {
    question: "Who owns the automation once it's built?",
    answer:
      "You do. We hand over documented workflows, architecture diagrams, and admin access. Many clients keep us on for ongoing tuning and support, but nothing is built to lock you in.",
  },
  {
    question: "Can you support multiple languages?",
    answer:
      "Yes — language detection and multilingual response generation are standard in our WhatsApp, voice, and chat workflows, not an add-on.",
  },
  {
    question: "How do you handle data privacy and security?",
    answer:
      "Sensitive data (financial, health, or account credentials) is scoped out of model context wherever possible, access is logged, and any workflow touching regulated data goes through a dedicated security review before launch.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "We've documented builds and written playbooks for healthcare, real estate, education, restaurants, retail, finance, manufacturing, construction, logistics, travel, law firms, and e-commerce — see the Industries page for what applies specifically to yours.",
  },
  {
    question: "Can AI integrate with my current software?",
    answer:
      "In most cases, yes. We've built integrations for HubSpot, Salesforce, Zoho, Google Workspace, and most tools with a REST API. If your software exposes an API, we can almost always connect to it without requiring a migration.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes — every plan includes a post-launch tuning window, and ongoing maintenance is available afterward so the system keeps performing as your business changes.",
  },
  {
    question: "Can you customize AI agents?",
    answer:
      "Yes — beyond our standard solutions, we build fully custom AI agents designed around your exact workflow, tools, and escalation rules.",
  },
  {
    question: "Will I receive training?",
    answer:
      "Yes — training is a formal step in our process, not an afterthought. We walk your team through how the system works, how to read its outputs, and how to make basic adjustments, so you're never fully dependent on us day-to-day.",
  },
  {
    question: "Can the system scale as my business grows?",
    answer:
      "Yes — every architecture is designed so new workflows and higher volume can be added without rebuilding what already exists. If your needs change significantly, we revisit the architecture together rather than letting it strain silently.",
  },
];

export const PRODUCT_DESCRIPTION =
  "hamiaiworks AI Agent is an enterprise-grade AI automation platform that transforms WhatsApp into a complete intelligent business assistant. It understands text, voice messages, images, PDFs, and documents; answers customer questions using an AI knowledge base; recommends products; qualifies leads; books appointments; updates CRM; generates payment links and invoices; automates follow-ups; hands conversations to human agents when needed; and provides real-time analytics.";

export const PRODUCT_POWERED_BY = [
  "n8n",
  "OpenAI",
  "WhatsApp Business Cloud API",
  "MongoDB Vector Search",
  "Google Calendar",
  "CRM Integrations",
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    setupPrice: "$799",
    monthlyPrice: "$399/month",
    audience: "Perfect for small businesses, startups, restaurants, clinics, salons, consultants, and local service providers.",
    featureGroups: [
      {
        items: [
          "WhatsApp AI Agent Setup",
          "WhatsApp Business Cloud API Integration",
          "AI Chatbot (24/7)",
          "Text Message Understanding",
          "Voice Message Understanding",
          "AI Knowledge Base",
          "FAQ Automation",
          "PDF Knowledge Upload",
          "Product Information Responses",
          "Lead Capture",
          "Appointment Booking",
          "Google Calendar Integration",
          "Basic CRM Integration",
          "Human Agent Handoff",
          "Basic Analytics Dashboard",
          "Up to 500 Knowledge Documents",
          "Up to 5 AI Automations",
          "1 WhatsApp Business Number",
          "30 Days Premium Support",
        ],
      },
    ],
    ctaLabel: "Get Started",
  },
  {
    name: "Standard",
    badge: "Most Popular",
    setupPrice: "$1,599",
    monthlyPrice: "$599/month",
    audience: "For growing businesses ready to automate sales, follow-ups, and multi-language support.",
    highlighted: true,
    featureGroups: [
      { groupLabel: "Everything in Starter, plus", items: [
        "Image Understanding",
        "Document Analysis",
        "OCR Support",
        "Product Recommendation Engine",
        "Multi-Language AI",
        "Lead Qualification",
        "Smart Follow-up Automation",
        "Payment Link Generation",
        "Invoice Generation",
        "CRM Synchronization",
        "Customer Tagging",
        "Google Sheets Integration",
        "Advanced Appointment Booking",
        "Order Status Automation",
        "Inventory Lookup",
        "AI Conversation Memory",
        "Advanced Analytics Dashboard",
        "Up to 2,000 Knowledge Documents",
        "Up to 15 AI Automations",
        "Priority Support",
      ]},
    ],
    ctaLabel: "Book a Demo",
  },
  {
    name: "Enterprise",
    setupPrice: "$3,999",
    monthlyPrice: "$999/month",
    audience: "For enterprises that need multi-channel AI, deep integrations, and dedicated support.",
    featureGroups: [
      { groupLabel: "Enterprise AI Channels", items: [
        "WhatsApp AI Agent",
        "Instagram AI Agent",
        "Facebook Messenger AI",
        "Website Live Chat AI",
      ]},
      { groupLabel: "Advanced AI", items: [
        "GPT-Powered Business Assistant",
        "Voice AI",
        "Image Recognition",
        "Document Intelligence",
        "OCR Processing",
        "AI Decision Making",
        "Multi-Agent AI System",
      ]},
      { groupLabel: "Enterprise Automation", items: [
        "Unlimited AI Workflows",
        "Advanced CRM Integration",
        "ERP Integration",
        "Custom API Integrations",
        "Webhooks",
        "Team Inbox",
        "Department Routing",
        "Automatic Ticket Creation",
        "Smart Escalation",
        "SLA Management",
      ]},
      { groupLabel: "Sales Automation", items: [
        "AI Lead Scoring",
        "Sales Pipeline Automation",
        "Proposal Generation",
        "Quotation Automation",
        "Invoice Automation",
        "Payment Tracking",
        "Automated Follow-ups",
        "Upsell & Cross-Sell Automation",
      ]},
      { groupLabel: "Business Intelligence", items: [
        "Executive Dashboard",
        "Real-Time Analytics",
        "Revenue Tracking",
        "Customer Insights",
        "Conversation Analytics",
        "AI Performance Reports",
        "Monthly Business Reports",
      ]},
      { groupLabel: "Enterprise Security", items: [
        "Role-Based Access",
        "Secure Cloud Infrastructure",
        "Daily Backups",
        "Audit Logs",
      ]},
      { groupLabel: "Premium Integrations", items: [
        "Google Workspace",
        "Microsoft 365",
        "HubSpot",
        "Salesforce",
        "Zoho CRM",
        "Shopify",
        "WooCommerce",
        "Stripe",
        "Custom API Integrations",
      ]},
      { groupLabel: "Enterprise Support", items: [
        "Dedicated Account Manager",
        "Priority Support",
        "Monthly AI Optimization",
        "Team Training",
        "Continuous AI Improvements",
      ]},
    ],
    ctaLabel: "Contact Sales",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "WhatsApp AI Agent", starter: true, standard: true, enterprise: true },
  { feature: "Instagram / Messenger / Website AI", starter: false, standard: false, enterprise: true },
  { feature: "Text & Voice Understanding", starter: true, standard: true, enterprise: true },
  { feature: "Image & Document (OCR) Understanding", starter: false, standard: true, enterprise: true },
  { feature: "Knowledge Base Documents", starter: "500", standard: "2,000", enterprise: "Unlimited" },
  { feature: "AI Automations", starter: "5", standard: "15", enterprise: "Unlimited" },
  { feature: "Multi-Language AI", starter: false, standard: true, enterprise: true },
  { feature: "Lead Capture & Qualification", starter: "Capture only", standard: true, enterprise: true },
  { feature: "Appointment Booking", starter: true, standard: true, enterprise: true },
  { feature: "Payment Links & Invoicing", starter: false, standard: true, enterprise: true },
  { feature: "CRM Integration", starter: "Basic", standard: "Synchronized", enterprise: "Advanced + ERP" },
  { feature: "Analytics Dashboard", starter: "Basic", standard: "Advanced", enterprise: "Executive BI Suite" },
  { feature: "Multi-Agent AI System", starter: false, standard: false, enterprise: true },
  { feature: "Team Inbox & Department Routing", starter: false, standard: false, enterprise: true },
  { feature: "Sales Pipeline Automation", starter: false, standard: false, enterprise: true },
  { feature: "Role-Based Access & Audit Logs", starter: false, standard: false, enterprise: true },
  { feature: "Support", starter: "30 days premium", standard: "Priority", enterprise: "Dedicated account manager" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "when-not-to-automate",
    title: "When not to automate a workflow (yet)",
    excerpt:
      "The most useful automation audits we run end with a list of things we recommend leaving alone. Here's how we decide what's ready.",
    category: "Strategy",
    readTime: "6 min read",
    date: "2026-06-02",
    author: "hamiaiworks Team",
    content: [
      "Every audit we run produces two lists: workflows worth automating now, and workflows we recommend leaving alone. The second list is usually more valuable to the client than the first, because it stops them from spending budget on the wrong problem.",
      "A workflow is a poor automation candidate when the steps themselves are still changing month to month, when the cost of a wrong answer is high and hard to detect quickly, or when the 'workflow' is really a relationship, not a process — some sales and account-management conversations fall here.",
      "The tell we look for is inconsistency: if three experienced staff members would each handle the same case differently, there isn't yet a single process to automate. We'll usually recommend standardizing the process manually first, then automating the standardized version.",
      "None of this is a reason to avoid automation broadly. It's a reason to sequence it — start with the highest-volume, most consistent, most measurable workflow, prove the model works, then expand from there.",
    ],
  },
  {
    slug: "rag-vs-fine-tuning-support",
    title: "RAG vs. fine-tuning for customer support agents",
    excerpt:
      "For most support use cases, retrieval beats fine-tuning on cost, freshness, and auditability. We break down when that changes.",
    category: "Engineering",
    readTime: "9 min read",
    date: "2026-05-18",
    author: "hamiaiworks Team",
    content: [
      "Fine-tuning bakes knowledge into model weights. Retrieval-augmented generation keeps knowledge in an external store and pulls the relevant pieces into context at answer time. For support automation specifically, we default to RAG for three reasons.",
      "First, freshness: support knowledge changes constantly — pricing, policies, known issues. Updating a vector store is near-instant; retraining a model is not. Second, auditability: with RAG you can show exactly which document produced an answer, which matters when a compliance team asks why the agent said what it said.",
      "Third, cost: most support knowledge bases are small enough that a well-tuned retrieval layer captures the value without the infrastructure and iteration cost of fine-tuning runs.",
      "Fine-tuning earns its place when the task is less about facts and more about style or format consistency at a scale where prompting alone becomes unreliable — but for 'does this agent know our current policy,' retrieval wins almost every time.",
    ],
  },
  {
    slug: "designing-escalation-rules",
    title: "Designing escalation rules your team will actually trust",
    excerpt:
      "An automation nobody trusts gets bypassed. Here's the escalation framework we use on every voice and chat workflow.",
    category: "Best practices",
    readTime: "7 min read",
    date: "2026-04-29",
    author: "hamiaiworks Team",
    content: [
      "The fastest way to kill an automation project isn't a bad answer — it's an unclear one that a customer accepts and a team member later has to unwind. Escalation rules exist to make sure the system knows what it doesn't know.",
      "We design escalation on three axes: topic sensitivity (refunds, security, health, anything regulated), confidence (how sure the model is in its own retrieval and reasoning), and explicit customer signal (frustration, repeated questions, a direct request for a human).",
      "Crucially, every escalation carries full context to the human — not just 'customer wants to talk to someone,' but the full conversation, what the system already tried, and why it escalated. That context is what makes teams trust the handoff instead of resenting it.",
      "We also treat escalation thresholds as tunable, not fixed. In the first few weeks of any launch we deliberately over-escalate, then loosen the thresholds only after reviewing real transcripts — trust is earned by evidence, not assumed by design.",
    ],
  },
  {
    slug: "voice-latency-budget",
    title: "The 800ms latency budget for voice AI that feels human",
    excerpt:
      "Every stage of a voice pipeline eats into the same latency budget. Here's how we allocate it end to end.",
    category: "Engineering",
    readTime: "8 min read",
    date: "2026-04-10",
    author: "hamiaiworks Team",
    content: [
      "Human conversation has a turn-taking rhythm with gaps typically under a second. Cross that threshold consistently and a voice agent starts to feel like it's 'thinking,' which breaks the illusion fast — so we budget the entire pipeline against roughly 800ms.",
      "That budget splits across speech-to-text (typically 150–250ms with a good streaming provider), model reasoning and any tool calls (the largest and most variable chunk), and text-to-speech synthesis (100–200ms for low-latency providers).",
      "The biggest lever is usually the reasoning step, especially when it involves a tool call like a calendar lookup. We optimize by starting speech synthesis on the first generated tokens rather than waiting for the full response, and by keeping tool calls narrow and fast rather than general-purpose.",
      "The result isn't zero latency — it's consistent, predictable latency, which turns out to matter more to how 'natural' a call feels than shaving off the last 100ms.",
    ],
  },
  {
    slug: "crm-automation-without-chaos",
    title: "CRM automation without turning your pipeline into a black box",
    excerpt:
      "Automated stage changes are only useful if your team still trusts the pipeline. Our rules for keeping automation legible.",
    category: "Strategy",
    readTime: "5 min read",
    date: "2026-03-22",
    author: "hamiaiworks Team",
    content: [
      "The moment a sales team stops trusting their CRM's stage data, they revert to spreadsheets and gut feel — and the automation that was supposed to save time ends up actively distrusted.",
      "We keep CRM automation legible with a simple rule: every automated field change is logged with the trigger that caused it, visible directly on the record. A stage that changed automatically should be as easy to audit as one a rep changed by hand.",
      "We also avoid automating judgment calls. Objective triggers — a contract was signed, a demo was booked, a trial expired — are safe to automate. Subjective ones, like 'this lead seems hot,' stay as a score or a flag a rep acts on, not an automatic stage jump.",
      "That distinction between 'update the record' and 'make the judgment' is the difference between automation that saves time and automation that quietly makes your pipeline lie to you.",
    ],
  },
  {
    slug: "measuring-automation-roi",
    title: "How we measure automation ROI before writing a proposal",
    excerpt:
      "A practical framework for estimating time saved, error reduction, and payback period before committing to a build.",
    category: "Strategy",
    readTime: "6 min read",
    date: "2026-03-05",
    author: "hamiaiworks Team",
    content: [
      "Before we quote anything, we build a rough ROI model with the client using numbers they already have: current volume, current handle time, current error or escalation rate, and current cost per unit of work.",
      "From there we estimate three things conservatively: the percentage of volume that's realistically automatable given the consistency of the process, the expected handle-time reduction on that automated share, and the one-time build cost plus ongoing maintenance.",
      "We deliberately use conservative automation rates in the first model — usually 15–20 points below what similar past projects achieved — so the payback estimate is a floor, not a best case.",
      "If the payback period on that conservative model is still under six months, we move forward. If it isn't, we say so before any contract is signed — an honest 'this isn't worth it yet' has done more for our client relationships than any pitch deck.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Standard pre-filled WhatsApp message used by every WhatsApp CTA on the site. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello hamiaiworks Team,\nI'm interested in your AI Automation services. I found your website and would like to schedule a free consultation.";

/** Builds a wa.me link with the pre-filled message (or a custom one) URL-encoded. */
export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
