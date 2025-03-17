/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
        height: {
            '1/8': '12.5%',
            '1/10': '10%'
        },
        width: {
            '1/8': '12.5%',
            '1/10': '10%'
        }
    },
  },
  plugins: [],
}

