/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          red:  '#E31B23',
          dark: '#C8151C',
        },
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideIn: { from: { opacity: '0', transform: 'translateX(50px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pulse2:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.4' } },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'slide-in':  'slideIn 1s ease forwards',
        'pulse-dot': 'pulse2 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
