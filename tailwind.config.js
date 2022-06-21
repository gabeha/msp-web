/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    minHeight: {
      'wiki': 'calc(100vh - 141px);',
      'period': '12rem'
    },
    extend: {
      spacing: {
        'wiki': 'calc(100vh - 141px);',
        'pool': '38rem;'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}
