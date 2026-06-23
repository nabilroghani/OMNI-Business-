/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F36E26',
          dark: '#0F0F11',
          bg: '#FAFAFB',
        }
      }
    },
  },
  plugins: [],
}
