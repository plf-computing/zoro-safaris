/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'black-ops': ['"Black Ops One"', 'cursive'],
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

