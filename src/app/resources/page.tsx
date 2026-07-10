import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, HelpCircle, FolderOpen, FileText, ClipboardList, Layers } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BLOG_POSTS } from "@/lib/data/site";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Resource Center",
  description: "Blog posts, FAQs, and case studies — plus guides and templates currently in progress.",
};

const COMING_SOON = [
  { icon: FileText, label: "Automation Playbooks" },
  { icon: ClipboardList, label: "Automation Planning Worksheet" },
  { icon: Layers, label: "Templates" },
  { icon: BookOpen, label: "Documentation" },
];

export default function ResourcesPage() {
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        title="Everything we've published, in one place"
        description="Real articles and FAQs available now — plus a few resources currently in progress, clearly marked as such."
      />

      <section className="section !pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <RevealOnScroll>
              <Link href="/blog">
                <GlassCard className="h-full" glow="violet">
                  <BookOpen className="text-accent-violet" size={22} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">Blog</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {BLOG_POSTS.length} articles on automation strategy, RAG, voice latency, and more.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-cyan">
                    Browse the blog <ArrowRight size={14} />
                  </span>
                </GlassCard>
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={0.06}>
              <Link href="/case-studies">
                <GlassCard className="h-full" glow="cyan">
                  <FolderOpen className="text-accent-cyan" size={22} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">Case Studies</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    Real, documented automation builds with full architecture breakdowns.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-cyan">
                    View case studies <ArrowRight size={14} />
                  </span>
                </GlassCard>
              </Link>
            </RevealOnScroll>

            <RevealOnScroll delay={0.12}>
              <Link href="/pricing#faq">
                <GlassCard className="h-full" glow="violet">
                  <HelpCircle className="text-accent-violet" size={22} />
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">FAQ</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    Straight answers on cost, timeline, security, integrations, and support.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent-cyan">
                    Read the FAQ <ArrowRight size={14} />
                  </span>
                </GlassCard>
              </Link>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <h2 className="font-display text-xl font-semibold text-ink mb-6">Recent articles</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {recentPosts.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 0.06}>
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="h-full" glow="cyan">
                    <span className="font-mono text-[11px] uppercase text-accent-cyan">{post.category}</span>
                    <h3 className="mt-2 font-display text-base font-semibold text-ink leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-muted leading-relaxed">{post.excerpt}</p>
                  </GlassCard>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <h2 className="font-display text-xl font-semibold text-ink mb-2">In progress</h2>
            <p className="text-sm text-ink-faint mb-6">
              Not published yet — listed here so you know what&apos;s coming.
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COMING_SOON.map((item, i) => (
              <RevealOnScroll key={item.label} delay={i * 0.05}>
                <div className="glass rounded-xl2 p-5 text-center opacity-60 cursor-not-allowed">
                  <item.icon className="mx-auto text-ink-faint" size={20} />
                  <p className="mt-3 text-xs text-ink-faint">{item.label}</p>
                  <span className="mt-2 inline-block font-mono text-[9px] uppercase tracking-wide text-accent-amber">
                    Coming soon
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
