/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8CFFDB",
        secondary: "#06B6D4",
        dark: "#0F172A",
        light: "#F8FAFC",
        accent: "#67E8F9",
      },
    },
  },
  plugins: [],
}