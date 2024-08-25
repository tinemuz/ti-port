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
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
        },
      },
      backgroundColor: {
        skin: {
          background: withOpacity('--color-background'),
          acent: withOpacity('--color-fill-acent'),
          border: withOpacity('--color-fill-border'),
        },
      },
      borderColor: {
        skin: {
          border: withOpacity('--color-fill-border'),
        },
      },
      fill: {
        skin: {
          acent: withOpacity('--color-fill-acent'),
        },
      },
    },
    colors: {
      mgray: "#D8D8D8",
      back: "#EAEAEA",
      mtext: "#242424",
      mred: "#F14E3A",
    },
  },
  plugins: [],
};
