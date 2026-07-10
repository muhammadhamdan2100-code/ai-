import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { BLOG_POSTS } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on automation strategy, RAG, voice AI latency, and building AI systems teams trust.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from inside the builds"
        description="What we've learned shipping AI automation into real operations — written for the people who have to trust the system, not just the people who bought it."
      />

      <section className="section !pt-0">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={(i % 3) * 0.06}>
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="h-full group" glow="violet">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-accent-cyan">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between text-xs text-ink-faint">
                      <span>{post.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-accent-cyan group-hover:gap-1.5 transition-all">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
