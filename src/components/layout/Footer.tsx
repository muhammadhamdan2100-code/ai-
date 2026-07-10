import Link from "next/link";
import { Linkedin, Facebook, Instagram, Github, Mail, Phone, MessageCircle } from "lucide-react";
import { SITE, getWhatsAppLink } from "@/lib/data/site";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

// Simple TikTok glyph (not in lucide-react) as an inline SVG icon.
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82c-.98-.64-1.67-1.63-1.87-2.77h-3.06v13.4c0 1.44-1.17 2.61-2.61 2.61a2.61 2.61 0 0 1 0-5.22c.26 0 .5.03.74.09v-3.1a5.7 5.7 0 0 0-.74-.05A5.72 5.72 0 0 0 3.34 16.3a5.72 5.72 0 0 0 5.72 5.72 5.72 5.72 0 0 0 5.72-5.72V9.2a7.02 7.02 0 0 0 4.1 1.32V7.45a4.13 4.13 0 0 1-2.28-1.63Z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: SITE.social.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: SITE.social.facebook, label: "Facebook", Icon: Facebook },
  { href: SITE.social.instagram, label: "Instagram", Icon: Instagram },
  { href: SITE.social.github, label: "GitHub", Icon: Github },
  { href: SITE.social.tiktok, label: "TikTok", Icon: TikTokIcon },
].filter((s) => !!s.href);

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export function Footer() {
  return (
    <footer className="bg-base-deep border-t border-line">
      <div className="section-inner section !py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand + company overview + socials + direct contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-signal-gradient" />
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-sm">{SITE.tagline}</p>
            <p className="mt-3 text-xs text-ink-faint leading-relaxed max-w-sm">
              We design and build AI automation systems — WhatsApp agents, voice AI, CRM and workflow
              automation — for business owners who&apos;d rather scale conversations than headcount.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-accent-cyan shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-ink transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-accent-cyan shrink-0" />
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-ink transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={14} className="text-accent-cyan shrink-0" />
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">
                  WhatsApp us
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass rounded-full p-2.5 text-ink-muted hover:text-accent-cyan hover:border-line-strong transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about" className="text-sm text-ink-muted hover:text-ink transition-colors">About</Link></li>
              <li><Link href="/founder" className="text-sm text-ink-muted hover:text-ink transition-colors">Founder</Link></li>
              <li><Link href="/pricing" className="text-sm text-ink-muted hover:text-ink transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm text-ink-muted hover:text-ink transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
              <li><Link href="/services" className="text-sm text-accent-cyan hover:text-ink transition-colors">View all →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">Industries</h3>
            <ul className="mt-4 space-y-3">
              {industries.slice(0, 5).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/industries" className="text-sm text-accent-cyan hover:text-ink transition-colors">View all →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/resources" className="text-sm text-ink-muted hover:text-ink transition-colors">Resource Center</Link></li>
              <li><Link href="/blog" className="text-sm text-ink-muted hover:text-ink transition-colors">Blog</Link></li>
              <li><Link href="/portfolio" className="text-sm text-ink-muted hover:text-ink transition-colors">Portfolio</Link></li>
              <li><Link href="/case-studies" className="text-sm text-ink-muted hover:text-ink transition-colors">Case Studies</Link></li>
              <li><Link href="/solutions" className="text-sm text-ink-muted hover:text-ink transition-colors">Solutions</Link></li>
              <li><Link href="/integrations" className="text-sm text-ink-muted hover:text-ink transition-colors">Integrations</Link></li>
              <li><Link href="/roi-calculator" className="text-sm text-accent-cyan hover:text-ink transition-colors">ROI Calculator</Link></li>
              <li><Link href="/ai-readiness-assessment" className="text-sm text-accent-cyan hover:text-ink transition-colors">AI Readiness Assessment</Link></li>
            </ul>
          </div>
        </div>

        <div className="node-divider mt-14 mb-8">
          <span className="mx-3 h-1.5 w-1.5 rounded-full bg-accent-violet" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-ink-muted transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-mono">Built with Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
