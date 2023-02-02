/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "cursive"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
