/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Cyan: '#00E5E5',
        Blue: '#72A5F2',
        Purple: '#E961FF',
        Black: '#091522',

      }
    },
  },
  plugins: [],
}