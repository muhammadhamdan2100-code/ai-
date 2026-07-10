import type { AutomationProject } from "@/types";

/**
 * These are real automation systems built by Hamdan, documented from actual
 * n8n workflow screenshots. Two have their real architecture screenshot
 * attached (`screenshot` set); two are marked `pending-asset` because the
 * screenshot only came through as an inline chat image, not an uploadable
 * file — swap `screenshot` to the real path once it's re-uploaded and flip
 * `status` to "live".
 */
export const projects: AutomationProject[] = [
  {
    slug: "omnichannel-ai-employee",
    title: "Omnichannel WhatsApp AI Employee",
    tagline: "A single AI agent that reads, listens, sees, and acts across a full business stack.",
    category: "Flagship AI Agent",
    status: "live",
    screenshot: "/images/portfolio/omnichannel-ai-employee.png",
    screenshotWidth: 1553,
    screenshotHeight: 621,
    overview:
      "The core hamiaiworks AI Agent architecture: a WhatsApp-native employee that accepts text, voice notes, images, and PDF documents in one conversation, classifies intent, decides whether it can resolve the request itself, and either acts autonomously across CRM, calendar, and payments — or hands off to a human with full context and an auto-created support ticket.",
    problem:
      "Businesses fielding WhatsApp inquiries typically need separate tools to handle text FAQs, voice messages, image-based questions (like a photo of a product or a receipt), and document uploads — and almost none of those tools can tell when a conversation actually needs a human. The result is either an agent that's too narrow to be useful, or a generic chatbot nobody trusts enough to let it take real actions.",
    solution:
      "A single n8n orchestration normalizes all four input types into one shape before anything else happens, so the downstream agent never has to know whether the customer typed, spoke, sent a photo, or uploaded a PDF. A dedicated intent-classification step (its own GPT model call with a structured output parser) decides early whether the conversation needs a human — routing straight to ticket creation and team notification when it does. Everything else flows into a tool-using main agent with real memory and a real knowledge base, not a scripted flow.",
    workflow: [
      { step: "Multi-modal intake", detail: "WhatsApp trigger routes by message type (rules-based) into four parallel branches: text, image (vision analysis), audio (transcription), and document (PDF extraction) — each normalized to a common format." },
      { step: "Merge + context load", detail: "Normalized inputs merge into one stream; the conversation is saved and the customer's profile is looked up before any AI reasoning happens." },
      { step: "Intent classification", detail: "A dedicated GPT-5 call with a structured output parser classifies intent and decides, before the main agent even runs, whether this needs a human." },
      { step: "Human handoff path", detail: "If flagged, a support ticket is created, the support team is notified, and the customer receives a handoff message — no black hole." },
      { step: "Main AI agent", detail: "If not flagged, a tool-using agent with MongoDB-backed chat memory and a RAG knowledge base handles the request — with tools for product search, CRM contact upsert, calendar availability + booking, deal creation, Stripe payment links, and email." },
      { step: "Response + logging", detail: "The reply sends back over WhatsApp and every interaction is logged to analytics for reporting." },
    ],
    techStack: ["n8n", "OpenAI GPT-5", "WhatsApp Business Cloud API", "MongoDB", "Vector Database", "HubSpot CRM", "Google Calendar", "Stripe", "Gmail"],
    features: [
      "Accepts text, voice, image, and PDF in the same conversation",
      "Dedicated intent classifier decides human-handoff before the main agent runs",
      "Tool-using agent with real conversation memory, not just a system prompt",
      "Autonomous CRM updates, calendar booking, and payment link generation",
      "Every handoff arrives pre-ticketed with full conversation context",
    ],
    integrations: ["WhatsApp Business Cloud API", "HubSpot CRM", "Google Calendar", "Stripe", "Gmail", "MongoDB Atlas Vector Search"],
    benefits: [
      "One agent replaces four separate single-channel tools",
      "Human handoff is a designed path, not a failure mode — support never loses context",
      "New business actions (bookings, payments, deals) ship as new tools, not new flows",
    ],
    roi: [
      { label: "Input types handled natively", value: 4 },
      { label: "Tools available to the agent", value: 7 },
      { label: "Manual re-routing eliminated", value: 90, suffix: "%" },
    ],
    futureImprovements: [
      "Add outbound proactive check-ins for stalled deals via the same agent",
      "Expand the intent classifier's confidence output into a tunable escalation threshold",
      "Add a lightweight admin view for reviewing auto-created tickets and their triggering conversation",
    ],
  },
  {
    slug: "ops-automation-suite",
    title: "Business Operations Automation Suite",
    tagline: "The unglamorous backend work — CRM sync, alerts, payments, knowledge base — fully automated.",
    category: "Operations Infrastructure",
    status: "live",
    screenshot: "/images/portfolio/ops-automation-suite.png",
    screenshotWidth: 1034,
    screenshotHeight: 635,
    overview:
      "A set of six connected background workflows that keep the AI agent's data fresh and the business's operational tools in sync: hourly CRM sync, email notifications, Stripe payment logging, priority-based Slack alerting, the core WhatsApp agent loop, and a daily knowledge-base refresh into the vector store.",
    problem:
      "An AI agent is only as good as the data behind it. Without this layer, CRM contacts drift out of date, payment events don't get logged anywhere queryable, low-priority and urgent Slack alerts get treated the same way, and the knowledge base the agent retrieves from goes stale the moment a policy or price changes.",
    solution:
      "Rather than one monolithic workflow, this is six small, single-purpose automations that each own one operational concern — which makes them independently debuggable and safe to modify without touching the core agent loop.",
    workflow: [
      { step: "Hourly CRM sync", detail: "Recent conversations are fetched, aggregated by customer, and used to upsert HubSpot contact records automatically." },
      { step: "Email notification handling", detail: "An inbound webhook triggers a Gmail send and logs the sent email for audit." },
      { step: "Payment logging", detail: "A Stripe webhook creates the charge, logs the payment, and sends a confirmation message." },
      { step: "Priority-aware Slack alerts", detail: "Incoming notifications are checked for priority and routed to either an urgent alert channel or a normal-priority message." },
      { step: "Core agent loop", detail: "The WhatsApp trigger feeds the hamiaiworks AI Agent (GPT-5, MongoDB memory, RAG knowledge base, HubSpot + Calendar tools), then logs the conversation to MongoDB." },
      { step: "Daily knowledge base sync", detail: "A scheduled job fetches knowledge base documents, splits them into chunks, embeds them, and stores them in the vector database — so the agent's answers stay current without manual re-uploading." },
    ],
    techStack: ["n8n", "OpenAI GPT-5", "OpenAI Embeddings", "MongoDB", "HubSpot CRM", "Stripe", "Gmail", "Slack", "Vector Database"],
    features: [
      "Six independently-owned automations instead of one fragile monolith",
      "Priority-based alert routing so urgent issues don't get buried",
      "Fully automated daily knowledge base refresh with chunking + embeddings",
      "Every payment and email event is logged for audit, not just fired and forgotten",
    ],
    integrations: ["HubSpot CRM", "Stripe", "Gmail", "Slack", "MongoDB Atlas Vector Search"],
    benefits: [
      "CRM data reflects real conversations within the hour, automatically",
      "Knowledge base freshness no longer depends on someone remembering to re-upload a doc",
      "Alert fatigue drops because priority is decided before a human ever sees the message",
    ],
    roi: [
      { label: "Independent workflows", value: 6 },
      { label: "CRM sync frequency", value: 1, suffix: "x/hr" },
      { label: "Knowledge base refresh", value: 1, suffix: "x/day" },
    ],
    futureImprovements: [
      "Add a dead-letter queue for failed CRM syncs with automatic retry",
      "Surface sync health on the analytics dashboard rather than only in Slack",
    ],
  },
  {
    slug: "ecommerce-retail-agent",
    title: "E-Commerce & Retail WhatsApp Agent",
    tagline: "Product questions, order status, bookings, and payment links — resolved in one thread.",
    category: "E-Commerce / Retail",
    status: "pending-asset",
    screenshot: null,
    overview:
      "A retail-focused WhatsApp customer service agent that routes by intent into five parallel handling paths — support, product inquiry, appointment booking, order status, and lead qualification — then merges every response back into a single coherent reply before logging to CRM, MongoDB, and Google Sheets.",
    problem:
      "Retail WhatsApp volume is a mix of very different intents — 'where's my order,' 'do you have this in blue,' 'can I book a fitting,' and genuine sales leads — and treating them all with one generic response flow means slow, generic answers across the board.",
    solution:
      "After multi-modal message normalization (text, voice, image, document) and a single knowledge-grounded reasoning step, the agent explicitly routes by detected intent into five separate handling branches, each free to call its own tools (calendar, HubSpot, Stripe) before all branches converge back into one merged response.",
    workflow: [
      { step: "Intake + normalization", detail: "Text, voice, image, and document messages are each processed and merged into one stream." },
      { step: "AI reasoning with business knowledge", detail: "An OpenAI GPT-4o agent with MongoDB memory and a business knowledge base produces a grounded understanding of the request." },
      { step: "Intent-based routing", detail: "The request routes to one of five paths: customer support, product inquiry, appointment booking, order status + payment link, or lead qualification." },
      { step: "Parallel tool actions", detail: "Each path calls the tools it needs — checking calendar availability, generating a Stripe payment link, or qualifying the lead directly in HubSpot." },
      { step: "Merge + multi-system logging", detail: "All response paths merge into one reply, which is logged to MongoDB, synced to HubSpot, backed up to Google Sheets, and sent back over WhatsApp." },
    ],
    techStack: ["n8n", "OpenAI GPT-4o", "WhatsApp Business Cloud API", "MongoDB", "HubSpot CRM", "Stripe", "Google Sheets", "Google Calendar"],
    features: [
      "Five distinct intent-routed handling paths in one conversation flow",
      "Order-status questions resolve directly to a generated payment link when needed",
      "Every conversation is triple-logged (MongoDB, HubSpot, Google Sheets) for redundancy",
    ],
    integrations: ["HubSpot CRM", "Stripe", "Google Sheets", "Google Calendar"],
    benefits: [
      "Retail-specific intents get retail-specific handling instead of one generic flow",
      "Redundant logging across three systems means no single point of data loss",
    ],
    roi: [
      { label: "Parallel intent paths", value: 5 },
      { label: "Systems updated per conversation", value: 3 },
    ],
    futureImprovements: [
      "Add inventory-level lookups directly into the product inquiry path",
      "Feed merged conversation outcomes back into lead scoring automatically",
    ],
  },
  {
    slug: "enterprise-secure-ai-platform",
    title: "Enterprise Secure Multi-Modal AI Platform",
    tagline: "Signature-verified webhooks, document vector search, and a full lead-to-booking pipeline.",
    category: "Enterprise Platform",
    status: "pending-asset",
    screenshot: null,
    overview:
      "The most security- and scale-hardened version of the WhatsApp agent architecture: incoming webhooks are signature-verified before anything else runs, uploaded documents get their own vector search step, and the routing layer branches into reply generation, booking, lead capture, and human escalation — each writing back to CRM and analytics independently.",
    problem:
      "Enterprise deployments can't accept unverified webhook traffic, and a single flat routing layer becomes a liability once the number of possible actions (recommendations, bookings, lead capture, escalation) grows — each new capability risks breaking the others.",
    solution:
      "Every inbound WhatsApp webhook is verified against its signature before processing begins. Message normalization still covers text, voice (Whisper), image (OpenAI Vision), and documents — but documents get a dedicated vector search step of their own, separate from the general knowledge base retrieval, so document-grounded answers are traceable to the specific file a customer sent.",
    workflow: [
      { step: "Verified intake", detail: "WhatsApp webhook signature is verified before any message processing begins." },
      { step: "Multi-modal normalization", detail: "Text intent detection, Whisper speech-to-text, OpenAI Vision image analysis, and a dedicated document vector search each normalize their input type." },
      { step: "Grounded reasoning", detail: "A GPT-5 call retrieves business knowledge embeddings and produces a structured response via a dedicated output parser." },
      { step: "Intent-routed actions", detail: "Routing splits into AI recommendation + product reply, availability check + booking + confirmation, lead capture + CRM save + sheet backup, and team notification + human handoff." },
      { step: "Unified write-back", detail: "All paths merge, the WhatsApp reply sends, and the conversation, CRM record, and analytics dashboard update in parallel." },
    ],
    techStack: ["n8n", "OpenAI GPT-5", "OpenAI Vision", "Whisper", "Vector Database", "REST APIs", "Webhooks", "Google Sheets"],
    features: [
      "Webhook signature verification before any processing — production-grade security by default",
      "Dedicated document vector search, separate from general knowledge base retrieval",
      "Four independent action paths (recommend, book, capture lead, escalate) merged into one reply",
      "Live analytics dashboard summary updated per conversation",
    ],
    integrations: ["Google Calendar", "Google Sheets", "Custom CRM via REST + PATCH", "Webhooks"],
    benefits: [
      "Meets enterprise security expectations for inbound webhook traffic out of the box",
      "New action paths can be added without touching document or voice processing",
      "Document-grounded answers are traceable to the source file, aiding compliance review",
    ],
    roi: [
      { label: "Independent action paths", value: 4 },
      { label: "Systems updated per turn", value: 3 },
    ],
    futureImprovements: [
      "Add per-document access control so vector search respects document-level permissions",
      "Expose the dashboard summary as a scheduled report emailed to stakeholders",
    ],
  },
];

export function getProjectBySlug(slug: string): AutomationProject | undefined {
  return projects.find((p) => p.slug === slug);
}
