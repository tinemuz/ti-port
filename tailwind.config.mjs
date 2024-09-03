/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Mono", ...defaultTheme.fontFamily.mono],
      },
      aspectRatio: {
        "2/1": "2 / 1",
        "3/1": "3 / 1",
      },
      colors: {
        skin: {
          text: {
            DEFAULT: "rgba(var(--color-text), <alpha-value>)",
            sub: "rgba(var(--color-text-sub), <alpha-value>)",
          },
          accent: {
            DEFAULT: "rgba(var(--color-accent), <alpha-value>)",
            sub: "rgba(var(--color-accent-sub), <alpha-value>)",
          },
          bg: {
            DEFAULT: "rgba(var(--color-bg), <alpha-value>)",
            sub: "rgba(var(--color-bg-sub), <alpha-value>)",
            sub2: "rgba(var(--color-bg-sub2), <alpha-value>)",
            sub3: "rgba(var(--color-bg-sub3), <alpha-value>)",
          },
          border: {
            DEFAULT: "rgba(var(--color-border), <alpha-value>)",
          },
        },
      },
    },
  },
  plugins: [],
};
