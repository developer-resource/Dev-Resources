/** @type {import('tailwindcss').Config} */

const { colors } = require('./src/utils/constants.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      fonts: ['poppinsLight', 'poppinsMedium', 'poppinsBold']
    },
    extend: {
      colors: {
        primary: colors.PRIMARY,
        border: colors.BORDER
      }
    },
    plugins: [],
  }
}
