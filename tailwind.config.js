/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainBlack:"#09071E",
        mainBlue:"#525FE1"
      },
      fontFamily:{
        DM:"DM Sans"
      }
    },
  },
  plugins: [],
}