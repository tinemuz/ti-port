/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Eudoxus", ...defaultTheme.fontFamily.sans],
        mono: ["Necto Mono"]
      },
      aspectRatio: {
        "2/1": "2 / 1",
        "3/1": "3 / 1",
      },
      colors: {
        skin: {
          text: { 
            DEFAULT: "rgba(var(--color-text), 1)",
            sub: "rgb(var(--color-text-sub))",
          },
          accent: {
            DEFAULT: "rgb(var(--color-accent))",
            sub: "rgb(var(--color-accent-sub))",
          },
          bg: {
            DEFAULT: "rgb(var(--color-bg))",
            sub: "rgb(var(--color-bg-sub))",
            card: "rgb(var(--color-bg-card))",
            sub3: "rgb(var(--color-bg-sub3))",
          },
          border: {
            DEFAULT: "rgb(var(--color-border))",
          },
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.skin.text.DEFAULT"),
            "--tw-prose-headings": theme("colors.skin.text.DEFAULT"),
            "--tw-prose-lead": theme("colors.skin.text.DEFAULT"),
            "--tw-prose-links": theme("colors.skin.accent.DEFAULT"),
            "--tw-prose-bold": theme("colors.skin.text.DEFAULT"),
            "--tw-prose-counters": theme("colors.skin.accent.sub"),
            "--tw-prose-bullets": theme("colors.skin.text.DEFAULT"),
            "--tw-prose-hr": theme("colors.skin.text.DEFAULT"),
            "--tw-prose-quotes": theme("colors.skin.text.DEFAULT"),
            "--tw-prose-quote-borders": theme("colors.skin.accent.DEFAULT"),
            "--tw-prose-captions": theme("colors.skin.accent.DEFAULT"),

            "--tw-prose-th-borders": theme("colors.skin.accent.DEFAULT"),
            "--tw-prose-td-borders": theme("colors.skin.accent.DEFAULT"),
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
