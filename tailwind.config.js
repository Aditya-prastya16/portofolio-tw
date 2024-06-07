/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        
        spacesemibold: "space-semibold, cursive",
        spacebold: "space-bold, cursive",
        spaceregular: "space-regular, cursive",
        spacelight: "space-light, cursive",
        
      },
    },
  },
  plugins: [],
}