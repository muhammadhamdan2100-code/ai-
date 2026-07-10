import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { StickyBookCTA } from "@/components/ui/StickyBookCTA";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ExitIntentPopup } from "@/components/ui/ExitIntentPopup";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { SITE } from "@/lib/data/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — AI Automation Agency`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "AI automation agency",
    "WhatsApp AI agent",
    "voice AI",
    "AI chatbots",
    "CRM automation",
    "n8n automation",
    "customer support AI",
  ],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — AI Automation Agency`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — AI Automation Agency`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-violet focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyBookCTA />
        <FloatingWhatsApp />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
