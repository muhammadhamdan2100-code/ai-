"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data/services";

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  // Honeypot field — real users never see or fill this; bots often do.
  website: string;
}

const initialState: FormState = { name: "", email: "", company: "", service: "", message: "", website: "" };

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Tell us a little about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return; // prevent double-submit
    if (form.website) return; // honeypot triggered — silently drop, no error shown to the bot
    if (!validate()) return;

    setSubmitting(true);
    // In production this would POST to an API route or CRM webhook.
    // Simulated network delay before navigating to the thank-you page.
    setTimeout(() => {
      router.push("/thank-you");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users via CSS, left in the tab order trap for bots */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-ink-muted mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-white/[0.03] border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet transition-colors"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-ink-muted mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-white/[0.03] border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet transition-colors"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm text-ink-muted mb-2">
          Company <span className="text-ink-faint">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full bg-white/[0.03] border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet transition-colors"
          placeholder="Acme Inc."
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm text-ink-muted mb-2">
          What are you looking to automate?
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full bg-white/[0.03] border border-line rounded-lg px-4 py-3 text-sm text-ink focus:border-accent-violet transition-colors"
        >
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug} className="bg-base-soft">
              {s.name}
            </option>
          ))}
          <option value="other" className="bg-base-soft">
            Something else
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-ink-muted mb-2">
          Project details
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-white/[0.03] border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet transition-colors resize-none"
          placeholder="What's the workflow, and roughly what volume are you dealing with?"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        {submitting ? "Sending..." : "Send message"}
        <Send size={16} />
      </Button>
    </form>
  );
}
