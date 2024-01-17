/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily : {
        title : ['"Roboto"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

