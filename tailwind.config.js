/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "##FF770F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
    screens: {
      xs: "420px",
      ss: "580px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
      xl: "1800px"
    }
  },
  plugins: [],
}