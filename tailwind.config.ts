import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "#050505",
        "background-secondary": "#0f0f10",
        "background-tertiary": "#19191a",
        "content-body": "#cdcbcc",
        "content-placeholder": "#827d7f",
        "content-headline": "#b2b2b2",
        "border-primary": "#19191a",
        "border-secondary": "#323234",
        "border-tertiary": "#97979b",
        "accent-purple": "#4b2dbb",
        "accent-green": "#87bb2d",
        "accent-pink": "#b5446b",
      },
    },
  },
  plugins: [],
} satisfies Config;
