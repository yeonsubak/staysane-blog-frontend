/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans KR", "sans-serif"],
      serif: ["Noto Serif KR", "serif"],
    },
    colors: {
      themeGray: "#F9F9FE",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
