const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rubik:['Rubik',...defaultTheme.fontFamily.sans],
        gotham:['Gotham', ...defaultTheme.fontFamily.sans],
      },
     
    },
  },
  plugins: [],
}

