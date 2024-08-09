/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        cmyk: {
          "color-scheme": "light",
          primary: "#1b75bb",
          secondary: "#fa9322",
          accent: "#8fc443",
          neutral: "#1a1a1a",
          "base-100": "oklch(100% 0 0)",
          info: "#4AA8C0",
          success: "#823290",
          warning: "#EE8133",
          error: "#E93F33",
        },
      },
      {
        night: {
          "color-scheme": "dark",
          primary: "#fa9322",
          secondary: "#1b75bb",
          accent: "#8fc443",
          neutral: "#1E293B",
          "base-100": "#0F172A",
          info: "#0CA5E9",
          "info-content": "#000000",
          success: "#2DD4BF",
          warning: "#F4BF50",
          error: "#FB7085",
        },
      },
    ],
  },
};
