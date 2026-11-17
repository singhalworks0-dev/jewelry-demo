/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        toratory: {
          bg: '#FFFFFF',
          surface: '#FFFFFF',
          border: '#E8E5DF',
          dark: '#141414',
          gray: '#666666',
          muted: '#8E8E8E',
          accent: '#C5A880'
        }
      },
      fontFamily: {
        serif: ['"New York"', 'Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'serif'],
        sans: ['"New York"', 'Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'serif'],
      },
      letterSpacing: {
        luxury: '0.25em',
        widest: '0.2em'
      }
    },
  },
  plugins: [],
}
