/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', sans-serif],
        Sans: ['DM Sans', sans-serif],
        outfit: ['Outfit', sans-serif],
      },
    },
  },
  plugins: [],
}

