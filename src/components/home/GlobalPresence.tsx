"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { Zap, ShieldCheck, Globe2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { NodeNetwork } from "@/components/ui/NodeNetwork";

// Public, stable topojson world atlas — fetched client-side only.
const GEO_URL = "https://unpkg.com/world-atlas@2/countries-110m.json";

// Company location (Pakistan) and the five target markets, as [longitude, latitude].
const ORIGIN: [number, number] = [73.0479, 33.6844]; // Islamabad
const MARKETS: { name: string; coords: [number, number] }[] = [
  { name: "USA", coords: [-74.006, 40.7128] },
  { name: "Canada", coords: [-79.3832, 43.6532] },
  { name: "United Kingdom", coords: [-0.1276, 51.5072] },
  { name: "UAE", coords: [55.2708, 25.2048] },
  { name: "Australia", coords: [151.2093, -33.8688] },
];

const TRUST_CARDS = [
  {
    icon: Zap,
    title: "Fast AI Implementation",
    description: "Strategic AI automation solutions designed for modern businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Secure AI Automation",
    description: "Enterprise-focused workflows with privacy, reliability, and scalable architecture.",
  },
  {
    icon: Globe2,
    title: "Remote-First Company",
    description: "Delivering AI solutions globally through a distributed digital team.",
  },
];

export function GlobalPresence() {
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null);

  return (
    <section className="section relative overflow-hidden">
      {/* subtle AI network nodes around the map, matching the site's signature motif */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <NodeNetwork className="w-full h-full" />
      </div>

      <div className="section-inner relative">
        <SectionHeading
          eyebrow="Global presence"
          title="Serving Businesses Worldwide"
          description="Building intelligent AI automation systems for companies across the globe."
        />

        {/* World map */}
        <RevealOnScroll delay={0.1}>
          <div className="mt-14 glass-strong rounded-xl2 p-3 md:p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-glow opacity-30 pointer-events-none" />
            <ComposableMap
              projectionConfig={{ scale: 148, center: [20, 15] }}
              className="w-full h-auto relative"
              style={{ maxHeight: "520px" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="rgba(255,255,255,0.05)"
                      stroke="rgba(255,255,255,0.10)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "rgba(110,91,255,0.25)", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Animated glowing connection lines from origin to each target market */}
              {MARKETS.map((market, i) => (
                <Line
                  key={market.name}
                  from={ORIGIN}
                  to={market.coords}
                  stroke="#22D3EE"
                  strokeWidth={hoveredMarket === market.name ? 2 : 1}
                  strokeLinecap="round"
                  strokeDasharray="1 5"
                  className="connection-line"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    opacity: hoveredMarket && hoveredMarket !== market.name ? 0.2 : 0.7,
                    transition: "opacity 0.3s, stroke-width 0.3s",
                  }}
                />
              ))}

              {/* Origin marker */}
              <Marker coordinates={ORIGIN}>
                <circle r={4} fill="#6E5BFF" stroke="#0A0E17" strokeWidth={1.5} />
                <circle r={4} fill="#6E5BFF" className="origin-pulse" />
              </Marker>

              {/* Market markers */}
              {MARKETS.map((market) => (
                <Marker
                  key={market.name}
                  coordinates={market.coords}
                  onMouseEnter={() => setHoveredMarket(market.name)}
                  onMouseLeave={() => setHoveredMarket(null)}
                >
                  <circle
                    r={hoveredMarket === market.name ? 6 : 4}
                    fill="#22D3EE"
                    stroke="#0A0E17"
                    strokeWidth={1.5}
                    style={{ cursor: "pointer", transition: "r 0.2s" }}
                  />
                  <text
                    textAnchor="middle"
                    y={-12}
                    className="market-label"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 9,
                      fill: "#F5F7FA",
                      opacity: hoveredMarket === market.name ? 1 : 0,
                      transition: "opacity 0.2s",
                      pointerEvents: "none",
                    }}
                  >
                    {market.name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </RevealOnScroll>

        {/* Target market chips (accessible list — also readable without hovering the map) */}
        <RevealOnScroll delay={0.15}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {MARKETS.map((market) => (
              <span
                key={market.name}
                onMouseEnter={() => setHoveredMarket(market.name)}
                onMouseLeave={() => setHoveredMarket(null)}
                className={`font-mono text-xs rounded-full px-3 py-1.5 border transition-colors cursor-default ${
                  hoveredMarket === market.name
                    ? "border-accent-cyan text-ink bg-accent-cyan/10"
                    : "border-line text-ink-muted"
                }`}
              >
                {market.name}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Trust indicator cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {TRUST_CARDS.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i * 0.08}>
              <GlassCard glow="violet" className="h-full text-center">
                <card.icon className="mx-auto text-accent-violet" size={26} />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{card.description}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button href="/contact" size="lg">
              Schedule Free AI Strategy Call
              <ArrowUpRight size={18} />
            </Button>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx global>{`
        .connection-line {
          animation: dash-flow 2.5s linear infinite;
        }
        @keyframes dash-flow {
          to {
            stroke-dashoffset: -24;
          }
        }
        .origin-pulse {
          animation: origin-pulse-anim 2.4s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes origin-pulse-anim {
          0% {
            opacity: 0.6;
            r: 4;
          }
          70% {
            opacity: 0;
            r: 14;
          }
          100% {
            opacity: 0;
            r: 14;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .connection-line,
          .origin-pulse {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
