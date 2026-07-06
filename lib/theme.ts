// Font-family stacks — the CSS variables are injected by next/font in app/layout.tsx
export const FP = "var(--font-press), monospace"; // Press Start 2P (headings/labels/buttons)
export const FM = "var(--font-mono), monospace"; // Space Mono (body)

// Palette from the art-direction brief — do not invent new colors.
export const C = {
  yellow: "#FFE040",
  yellowStripe: "#FFC020",
  purpleShadow: "#8850AA",
  purpleDeep: "#5A2E7A",
  purpleDeep2: "#362A8A",
  purpleDeep3: "#5A4EBE",
  panelDark: "#0F0A2E",
  panelDark2: "#1A1440",
  navBar: "rgba(40,35,95,0.55)",
  textMuted: "rgba(230,225,255,0.85)",
} as const;
