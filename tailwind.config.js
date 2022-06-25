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
      'period': '12rem',
      'card': '150px'
    },
    maxHeight: {
      'pracs': 'calc(100vh - 350px);',
      'pool': '38rem;'
    },
    extend: {
      spacing: {
        'wiki': 'calc(100vh - 141px);',
        'info': 'calc(100vh - 111px);',
        'pool': '38rem;'
      }
    },
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
}
