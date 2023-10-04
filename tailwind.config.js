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
      screens: {
        'slg': '908px',
        // => @media (min-width: 908px) { ... }
        'lsm': '684px',
        // => @media (min-width: 684px) { ... }

      },
    },
  },
  plugins: [],
}

