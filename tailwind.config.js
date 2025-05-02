/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d8ff',
          300: '#a6baff',
          400: '#8195ff',
          500: '#6a70ff',
          600: '#574df5',
          700: '#4a3add',
          800: '#1E40AF',
          900: '#1e2f8f',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};