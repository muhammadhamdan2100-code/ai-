import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { solutions } from "@/lib/data/solutions";
import { industries } from "@/lib/data/industries";
import { BLOG_POSTS } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/portfolio",
    "/case-studies",
    "/pricing",
    "/founder",
    "/blog",
    "/contact",
    "/roi-calculator",
    "/ai-readiness-assessment",
    "/integrations",
    "/resources",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionRoutes = solutions.map((s) => ({
    url: `${SITE.url}/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = industries.map((i) => ({
    url: `${SITE.url}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const caseStudyRoutes = projects.map((p) => ({
    url: `${SITE.url}/case-studies/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = BLOG_POSTS.map((b) => ({
    url: `${SITE.url}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes, ...industryRoutes, ...caseStudyRoutes, ...blogRoutes];
}
