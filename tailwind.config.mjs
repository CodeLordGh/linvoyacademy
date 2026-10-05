/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2e6e',
          50:  '#eef1fb',
          100: '#d5dcf5',
          200: '#adb9ec',
          300: '#7f90df',
          400: '#5567d1',
          500: '#3a4dc3',
          600: '#2d3caa',
          700: '#1a2e6e',
          800: '#162563',
          900: '#111d4d',
        },
        gold: {
          DEFAULT: '#f0a500',
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f0a500',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: '#f9f7f2',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
        400: '400ms',
        600: '600ms',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float:       'float 4s ease-in-out infinite',
        'fade-up':   'fade-up 0.7s ease-out both',
        'fade-in':   'fade-in 0.6s ease-out both',
        shimmer:     'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
