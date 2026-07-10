export interface Integration {
  name: string;
  category: string;
}

// Every entry here is genuinely referenced somewhere in our real service,
// solution, industry, or project data — nothing here is aspirational or
// invented for this page. If we add a genuinely new integration to a
// build, it gets added here too, not before.
export const INTEGRATIONS: Integration[] = [
  // AI & language models
  { name: "OpenAI GPT-5", category: "AI & Language Models" },
  { name: "OpenAI GPT-4o", category: "AI & Language Models" },
  { name: "OpenAI Embeddings", category: "AI & Language Models" },
  { name: "OpenAI Vision", category: "AI & Language Models" },
  { name: "Whisper", category: "AI & Language Models" },
  { name: "Claude", category: "AI & Language Models" },

  // Messaging & voice
  { name: "WhatsApp Business Cloud API", category: "Messaging & Voice" },
  { name: "Twilio", category: "Messaging & Voice" },
  { name: "Deepgram", category: "Messaging & Voice" },
  { name: "ElevenLabs", category: "Messaging & Voice" },
  { name: "Slack", category: "Messaging & Voice" },
  { name: "Gmail", category: "Messaging & Voice" },

  // Automation & orchestration
  { name: "n8n", category: "Automation & Orchestration" },
  { name: "Webhooks", category: "Automation & Orchestration" },
  { name: "REST APIs", category: "Automation & Orchestration" },

  // CRM & sales
  { name: "HubSpot", category: "CRM & Sales" },
  { name: "Salesforce", category: "CRM & Sales" },
  { name: "Zoho CRM", category: "CRM & Sales" },
  { name: "Apollo", category: "CRM & Sales" },

  // Commerce & payments
  { name: "Stripe", category: "Commerce & Payments" },
  { name: "Shopify", category: "Commerce & Payments" },
  { name: "WooCommerce", category: "Commerce & Payments" },

  // Productivity & scheduling
  { name: "Google Calendar", category: "Productivity & Scheduling" },
  { name: "Google Sheets", category: "Productivity & Scheduling" },
  { name: "Google Workspace", category: "Productivity & Scheduling" },

  // Data & storage
  { name: "MongoDB", category: "Data & Storage" },
  { name: "PostgreSQL", category: "Data & Storage" },
  { name: "Vector Database", category: "Data & Storage" },

  // Platform
  { name: "Next.js", category: "Platform" },
  { name: "TypeScript", category: "Platform" },
  { name: "Tailwind CSS", category: "Platform" },
  { name: "Vercel", category: "Platform" },
];

export const INTEGRATION_CATEGORIES = Array.from(new Set(INTEGRATIONS.map((i) => i.category)));
