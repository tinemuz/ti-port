/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({opacityValue}) => {
    if (opacityValue != undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgba(var(${variableName}))`;
  }
}

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
            DEFAULT: withOpacity("--color-text"),
            sub: withOpacity("--color-text-sub")
          },
          accent: {
            DEFAULT: withOpacity("--color-accent"),
          },
          bg: {
            DEFAULT: withOpacity("--color-bg"),
            sub: withOpacity("--color-bg-sub"),
          },
        },
      },
    },
  },
  plugins: [],
};
