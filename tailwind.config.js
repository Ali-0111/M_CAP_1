/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#272a31',
        'custom-orange': '#ec5242',
      },
      boxShadow: {
        'custom-shadow': '0 2px 5px 1px rgba(64, 60, 67, 0.16)',
      },
    },
  },
  plugins: [],
};
