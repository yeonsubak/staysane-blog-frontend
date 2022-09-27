/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ["Noto Sans KR", "sans-serif"],
      serif: ["Noto Serif KR", "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
