/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {

        'main-grid': '3fr  1.5fr',
      },
      colors: {
        'black-alt': '#262626',
      },
    },
  },
  plugins: [],
}

