/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          dark: '#5B21B6',
          light: '#C4B5FD',
        },
        accent: '#8B5CF6',
        neutral: {
          dark: '#0F172A',
          light: '#F8FAFC',
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        shine: 'shine 1.2s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        shine: {
          '0%': { transform: 'translateX(-200%)' },
          '100%': { transform: 'translateX(300%)' },
        },
      },
    },
  },
  plugins: [],
};