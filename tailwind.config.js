/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      Red: '#FF3811'
    },
    extend: {},
      fontFamily: {
        "Merry": ["Merriweather", "serif"],
    },
  },
  plugins: [require("daisyui")],
}

