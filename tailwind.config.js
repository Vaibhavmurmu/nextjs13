/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
    require("@tailwindcss/typography"),
  ],
}
  

