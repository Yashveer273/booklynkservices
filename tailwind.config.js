/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#F5FAFA",
          navbar: "#FFFFFF",
          footer: "#0B2D5C",
          text: "#0B2D5C",
          primary: "#F97316",
          primaryHover: "#EA580C",
          secondary: "#137D82",
          secondaryHover: "#0B2D5C",
          gradientStart: "#E0F2F1",
          gradientEnd: "#F5FAFA",
          gray700: "#374151",
          gray600: "#4B5563",
        },
      },
    },
  },
  plugins: [],
}
