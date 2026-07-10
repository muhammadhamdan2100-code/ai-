import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/site";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CTASection } from "@/components/home/CTASection";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="section pt-16 md:pt-24">
        <div className="section-inner max-w-2xl">
          <RevealOnScroll>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to blog
            </Link>
            <span className="eyebrow">{post.category}</span>
            <h1 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-ink leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-xs text-ink-faint font-mono">
              <span>{post.author}</span>
              <span>·</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </RevealOnScroll>

          <div className="mt-10 space-y-6">
            {post.content.map((paragraph, i) => (
              <RevealOnScroll key={i} delay={i * 0.04}>
                <p className="text-ink-muted leading-relaxed text-base md:text-lg">{paragraph}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
