/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:[ "Poppins", 'sans-serif'],
        roboto:["Roboto", 'sans-serif']
      },
      backgroundImage: {
        bggradient: "linear-gradient(0deg, #00fbaa -27%, #ea00a2)",
      },
    },
  },
  plugins: [],
}
