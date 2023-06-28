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
        primaryDark: colors.DARK_PRIMARY,
        primaryHover: colors.PRIMARY_HOVER,
        primaryDarkHover: colors.DARK_PRIMARY_HOVER,
        border: colors.BORDER,
        colorText: 'black',
        colorTextDark: 'white'
      }
    },
    plugins: [],
  }
}
