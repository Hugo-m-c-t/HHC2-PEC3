/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      primary: "#d3ffce",
      secondary: "#ed572b",
      tertiary: "lab(97.964%, -8.581%, 12.143%)",
      info: "#006ab5",
      infodark: "#0077cc",
      background: "hwb(81 88% 2%)",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      oro: "#f3ca14",
      plata: "#b1aea3",
      bronce: "rgb(185, 120, 58)",
    },
  },
  plugins: [require('tailwind-fontawesome')],
}

