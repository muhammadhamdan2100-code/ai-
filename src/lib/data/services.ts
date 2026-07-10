import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "whatsapp-ai-agent",
    name: "WhatsApp AI Agent",
    shortName: "WhatsApp Agent",
    icon: "MessageCircle",
    summary: "A always-on WhatsApp agent that answers, qualifies, and books — in your customers' language.",
    description:
      "We build WhatsApp agents on the Cloud API that hold real conversations, pull live answers from your knowledge base with retrieval-augmented generation, and hand off to a human the moment a conversation needs one. Multi-language by default, logged and reviewable from day one.",
    outcomes: [
      "Median first-response time under 4 seconds, 24/7",
      "60–80% of routine questions resolved with no human involved",
      "Every handoff arrives with full conversation context attached",
    ],
    workflow: [
      { step: "Message received", detail: "WhatsApp Cloud API webhook lands in n8n and is normalized." },
      { step: "Intent + language detected", detail: "The agent classifies intent and replies in the customer's language." },
      { step: "Knowledge retrieval", detail: "Relevant docs are pulled from a pgvector store via RAG." },
      { step: "Response or handoff", detail: "The agent answers directly, or escalates to a human with context." },
    ],
    stack: ["n8n", "WhatsApp Cloud API", "OpenAI / Claude", "pgvector", "PostgreSQL"],
  },
  {
    slug: "voice-ai",
    name: "Voice AI",
    shortName: "Voice AI",
    icon: "Phone",
    summary: "Phone agents that sound human, handle real call flows, and never put anyone on hold.",
    description:
      "Inbound and outbound voice agents built on low-latency speech pipelines, wired into your calendar and CRM so a call can end in a booked appointment, not just a transcript. Includes call recording, sentiment tagging, and live barge-in for supervisors.",
    outcomes: [
      "Sub-800ms response latency for natural-feeling calls",
      "100% of calls transcribed, tagged, and searchable",
      "Direct booking into your calendar during the call",
    ],
    workflow: [
      { step: "Call answered", detail: "Telephony provider streams audio into the speech-to-text pipeline." },
      { step: "Reasoning turn", detail: "The language model decides the next line and any tool calls needed." },
      { step: "Text-to-speech reply", detail: "Low-latency voice synthesis streams the response back to the caller." },
      { step: "Action + logging", detail: "Bookings, notes, and tags are written to CRM and call history." },
    ],
    stack: ["Twilio / Vonage", "Deepgram", "ElevenLabs", "n8n", "Google Calendar API"],
  },
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    shortName: "AI Chatbots",
    icon: "Bot",
    summary: "Website and app chatbots that actually know your product, not just your FAQ page.",
    description:
      "Embedded chat widgets backed by a retrieval layer trained on your docs, product catalog, and past support tickets. Ships with a lightweight admin dashboard to review conversations, correct answers, and watch the knowledge base improve over time.",
    outcomes: [
      "Answers grounded in your actual content, with source citations",
      "Self-serve deflection that measurably reduces ticket volume",
      "Admin dashboard for reviewing and correcting responses",
    ],
    workflow: [
      { step: "Content ingestion", detail: "Docs, PDFs, and past tickets are chunked and embedded." },
      { step: "Question asked", detail: "Widget sends the query to the retrieval + generation endpoint." },
      { step: "Grounded answer", detail: "Response is generated with citations back to source content." },
      { step: "Feedback loop", detail: "Thumbs up/down feeds a review queue that improves the knowledge base." },
    ],
    stack: ["Next.js widget", "pgvector", "OpenAI / Claude", "Supabase"],
  },
  {
    slug: "crm-automation",
    name: "CRM Automation",
    shortName: "CRM Automation",
    icon: "Workflow",
    summary: "Your CRM, kept clean and current automatically — no more stale pipelines.",
    description:
      "We connect your CRM to every channel that touches a deal — forms, email, calls, WhatsApp — so records update themselves, deals move stage automatically on real triggers, and your team spends time selling instead of data entry.",
    outcomes: [
      "Zero manual data entry for standard deal updates",
      "Automatic lead scoring and stage progression",
      "One source of truth across sales, support, and marketing",
    ],
    workflow: [
      { step: "Signal captured", detail: "A form fill, reply, or call event triggers an automation." },
      { step: "Enrichment", detail: "Contact and company data is enriched from third-party sources." },
      { step: "CRM update", detail: "Records, stages, and owners are updated via the CRM's API." },
      { step: "Notification", detail: "The right teammate is notified in Slack or email with context." },
    ],
    stack: ["n8n", "HubSpot / Salesforce API", "Clearbit", "Slack"],
  },
  {
    slug: "email-automation",
    name: "Email Automation",
    shortName: "Email Automation",
    icon: "Mail",
    summary: "Inbox triage, personalized sequences, and follow-ups that send themselves.",
    description:
      "From inbox triage that routes and drafts replies, to lifecycle sequences personalized per-recipient using CRM data, we automate the repetitive parts of email while keeping a human in the loop for anything sensitive.",
    outcomes: [
      "Inbound emails auto-classified and routed within seconds",
      "Personalized sequences built from live CRM fields",
      "Draft replies ready for human approval before sending",
    ],
    workflow: [
      { step: "Email received", detail: "Inbox webhook or IMAP polling captures the message." },
      { step: "Classification", detail: "The model tags intent (support, sales, billing, spam) and priority." },
      { step: "Draft generated", detail: "A contextual reply is drafted using CRM and thread history." },
      { step: "Send or queue", detail: "Low-risk replies send automatically; sensitive ones queue for review." },
    ],
    stack: ["Gmail / Outlook API", "n8n", "OpenAI / Claude", "CRM API"],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    shortName: "Lead Gen",
    icon: "Target",
    summary: "Pipelines that find, qualify, and enrich leads while your team sleeps.",
    description:
      "Automated prospecting pipelines that pull from public data sources and intent signals, score fit against your ideal customer profile, enrich contact details, and drop qualified leads straight into your CRM or outreach sequence.",
    outcomes: [
      "Continuous lead sourcing with no manual list-building",
      "Automatic fit scoring against your ICP",
      "Enriched, deduplicated records ready for outreach",
    ],
    workflow: [
      { step: "Sourcing", detail: "Leads are pulled from configured data sources on a schedule." },
      { step: "Scoring", detail: "Each lead is scored against your ideal customer profile." },
      { step: "Enrichment", detail: "Missing contact and firmographic data is filled in automatically." },
      { step: "Handoff", detail: "Qualified leads land in CRM or an outreach sequence, deduplicated." },
    ],
    stack: ["n8n", "Apollo / Clearbit", "PostgreSQL", "CRM API"],
  },
  {
    slug: "customer-support",
    name: "Customer Support",
    shortName: "Support AI",
    icon: "Headset",
    summary: "Tier-1 support automated end to end, with clean escalation for everything else.",
    description:
      "A support layer that resolves common tickets automatically across chat, email, and WhatsApp, tags and prioritizes everything else, and gives agents a single queue with full context instead of five disconnected tools.",
    outcomes: [
      "Tier-1 tickets resolved without agent involvement",
      "Unified queue across chat, email, and WhatsApp",
      "Full context attached to every escalation",
    ],
    workflow: [
      { step: "Ticket created", detail: "A message from any channel becomes a ticket with a unified schema." },
      { step: "Triage", detail: "Priority, category, and sentiment are assigned automatically." },
      { step: "Auto-resolution", detail: "Known issue types are resolved using the knowledge base." },
      { step: "Escalation", detail: "Anything unresolved routes to the right agent with full history." },
    ],
    stack: ["n8n", "Zendesk / Freshdesk API", "pgvector", "OpenAI / Claude"],
  },
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    shortName: "AI Consulting",
    icon: "Compass",
    summary: "A clear, sequenced automation roadmap — before a single workflow gets built.",
    description:
      "For teams that need direction before implementation: a structured audit of your current operations, an ROI-ranked automation roadmap, and architecture recommendations your internal team (or ours) can build against with confidence.",
    outcomes: [
      "Operations audit with automation opportunities ranked by ROI",
      "Reference architecture your team can build from",
      "A phased rollout plan with clear milestones",
    ],
    workflow: [
      { step: "Discovery", detail: "We map current tools, data flows, and manual bottlenecks." },
      { step: "Opportunity ranking", detail: "Each automation candidate is scored on impact and effort." },
      { step: "Architecture design", detail: "A reference architecture is produced for priority workflows." },
      { step: "Roadmap handoff", detail: "A phased rollout plan is delivered with milestones and owners." },
    ],
    stack: ["Process mining", "n8n", "Architecture diagrams", "ROI modeling"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
