/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Eudoxus", ...defaultTheme.fontFamily.sans],
        mono: ["Necto Mono"],
        serif: ["Fanwood Text"]
      },
      aspectRatio: {
        "2/1": "2 / 1",
        "3/1": "3 / 1",
      },
      colors: {
        skin: {
          text: {
            DEFAULT: "rgba(var(--color-text), 1)",
            sub: "rgba(var(--color-text-sub), 1)",
          },
          accent: {
            DEFAULT: "rgba(var(--color-accent), 1)",
            sub: "rgba(var(--color-accent-sub), 1)",
          },
          bg: {
            DEFAULT: "rgba(var(--color-bg), 1)",
            sub: "rgba(var(--color-bg-sub), 1)",
            card: "rgba(var(--color-bg-card), 1)",
            sub3: "rgba(var(--color-bg-sub3), 1)",
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
