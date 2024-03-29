/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#FBFBFE',
        'primary': '#D7D7E0',
        'secondary': '#1811A7',
        'accent': '#49DD71',
        'white': '#F9F9F9' 
      }
    },
  },
  plugins: [],
}

