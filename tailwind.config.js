const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#F9FAF8', // Light Greenish White
        'brand-surface': '#EFF5EE',   // Very Light Green
        'brand-primary': '#2E7D32',   // Strong Green
        'brand-primary-light': '#4CAF50', // Lighter Green for hover
        'brand-secondary': '#FFC107', // Amber/Gold
        'brand-accent': '#03A9F4',    // Light Blue
        'brand-text': '#1C1C1C',      // Dark Gray for text
        'brand-text-secondary': '#555555', // Lighter Gray for subtitles
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { 'text-shadow': '0 0 8px #2E7D32, 0 0 16px #2E7D32' },
          '50%': { 'text-shadow': '0 0 16px #4CAF50, 0 0 24px #4CAF50' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.svg')",
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ],
}
