import type { Config } from "tailwindcss";

// Design tokens for Hami AI Works.
// Palette is a deep navy-black base (not pure black) with a
// violet -> cyan automation-signal gradient as the brand accent,
// plus an emerald tone reserved for metrics/success states.
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E17", // primary background
          soft: "#0F1420", // raised surface background
          deep: "#050710", // deepest background (footers, contrast blocks)
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.16)",
        },
        ink: {
          DEFAULT: "#F5F7FA", // primary text
          muted: "#94A3B8", // secondary text
          faint: "#5B6472", // tertiary / disabled text
        },
        accent: {
          violet: "#6E5BFF",
          cyan: "#22D3EE",
          emerald: "#34D399",
          amber: "#FBBF6C",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "signal-gradient": "linear-gradient(90deg, #6E5BFF 0%, #22D3EE 100%)",
        "signal-gradient-soft": "linear-gradient(135deg, rgba(110,91,255,0.18) 0%, rgba(34,211,238,0.10) 100%)",
        "mesh-glow": "radial-gradient(circle at 20% 20%, rgba(110,91,255,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 50% 100%, rgba(52,211,153,0.10), transparent 45%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.35)",
        "glow-violet": "0 0 40px rgba(110,91,255,0.35)",
        "glow-cyan": "0 0 40px rgba(34,211,238,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-slower": "float 9s ease-in-out infinite",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
