/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "550px",
      // => @media (min-width: 576px) { ... }
      ...defaultTheme.screens,
    }, 
  },
  plugins: [],
};
