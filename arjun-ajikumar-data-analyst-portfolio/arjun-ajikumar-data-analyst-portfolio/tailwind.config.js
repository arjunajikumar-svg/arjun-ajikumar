/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { muted: "#9a9a9a", stat: "#d8d8d8" },
    },
  },
  plugins: [],
};
