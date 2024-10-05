/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        'black-ops': ['"Black Ops One"', 'cursive'],
        'spicy-rice-regular':['"Spicy Rice"', 'serif'],
        'poppins-regular':['"Poppins"', 'sans-serif'],
        'pt-serif-regular':['"PT Serif"', 'serif']
        
      },
    

    },
  },
  plugins: [require('flowbite/plugin')],
}

