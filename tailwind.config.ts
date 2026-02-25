import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      /* ── Palette Lyvies — Charte graphique officielle ── */
      colors: {
        noir:       { DEFAULT: "#0A0A08", 900: "#0A0A08" },
        cacao:      { DEFAULT: "#3B2218", 900: "#3B2218" },
        burgundy:   "#6B2D3E",
        terracotta: "#C08060",
        olive:      "#5C5A3E",
        sable:      { DEFAULT: "#F5EDE0", 100: "#F0ECE4" },
        taupe:      "#B8A99A",
        or:         "#C9A96E",
        charbon:    "#2E2A27",
      },

      /* ── Typographie (Jost uniquement) ── */
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
        garamond: ["var(--font-garamond)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem, 4.5vw, 4rem)", { lineHeight: "0.95", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.8rem, 3vw, 3rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.4rem, 2.2vw, 2.2rem)", { lineHeight: "1.1", letterSpacing: "0" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.15em" }],
      },

      /* ── Espacement ── */
      spacing: {
        "section": "clamp(5rem, 12vw, 10rem)",
        "section-sm": "clamp(3rem, 8vw, 6rem)",
      },

      /* ── Animations ── */
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "700": "700ms",
        "900": "900ms",
        "1200": "1200ms",
      },

      /* ── Backgrounds ── */
      backgroundImage: {
        "grain": "url('/images/grain.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },

      /* ── Keyframes ── */
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1s ease forwards",
        "scale-in": "scale-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-left": "slide-left 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 2s infinite linear",
      },
    },
  },
  plugins: [],
};

export default config;
