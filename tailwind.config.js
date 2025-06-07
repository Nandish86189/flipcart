/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public//*.{html,js}"],
  theme: {
    extend: {
        screens: {
        'md': '859px',
      },
  
    },
  },
  plugins: [],
}

