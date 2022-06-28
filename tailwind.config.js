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
      'period': '13rem',
      'card': '150px'
    },
    maxHeight: {
      'pracs': 'calc(100vh - 350px);',
      'pool': '38rem;'
    },
    extend: {
      spacing: {
        'wiki': 'calc(100vh - 300px);',
        'info': 'calc(100vh - 170px);',
        'pool': '38rem;'
      },
      backgroundImage: {
        'checking_boxes': "url('./assets/checking_boxes.svg')",
        'login': "url('./assets/login.svg')"
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
