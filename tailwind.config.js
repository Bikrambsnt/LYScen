const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    
    extend: {
  
      fontFamily:{
        rubik:['Rubik',...defaultTheme.fontFamily.sans],
       roboto:['Roboto', ...defaultTheme.fontFamily.sans],
       jost:['Jost', ...defaultTheme.fontFamily.sans],
       poppins:['Poppins', ...defaultTheme.fontFamily.sans],
      },
     
    },
  },
  plugins: [],
}

