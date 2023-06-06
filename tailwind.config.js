/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#272a31',
        'custom-orange': '#ec5242',
        'hnd-bg': '#d3d3d3',
      },
      boxShadow: {
        'custom-shadow': '0 2px 5px 1px rgba(64, 60, 67, 0.16)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
};
