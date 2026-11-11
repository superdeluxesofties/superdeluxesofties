/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0',
          400: '#CBD5E1',
          border: '#E2E8F0',
        },
        chocolate: {
          DEFAULT: '#3D1F17',
          dark: '#2E1610',
          darker: '#1E0D08',
          light: '#61382E',
          text: '#251714',
          muted: '#6E584F',
        },
        // Brand Vibrant Colors: Blue #2308ca, Red #cf0924, Yellow #FFCC33
        brandBlue: {
          DEFAULT: '#2308ca',
          hover: '#1b069d',
          dark: '#14047a',
          light: '#ece8fc',
          muted: '#3b1dd8',
        },
        strawberry: {
          DEFAULT: '#cf0924',
          hover: '#b0071e',
          dark: '#8f0518',
          light: '#fee8eb',
          pink: '#fca5b0',
        },
        brandRed: {
          DEFAULT: '#cf0924',
          hover: '#b0071e',
          dark: '#8f0518',
          light: '#fee8eb',
        },
        mango: {
          DEFAULT: '#FFCC33',
          dark: '#e6b82e',
          light: '#fff9e6',
          hover: '#e5b82d',
        },
        brandYellow: {
          DEFAULT: '#FFCC33',
          dark: '#e6b82e',
          light: '#fff9e6',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'Baloo 2', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'Satisfy', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(35, 8, 202, 0.06), 0 2px 6px -1px rgba(207, 9, 36, 0.04)',
        'medium': '0 10px 30px -4px rgba(35, 8, 202, 0.10), 0 4px 10px -2px rgba(207, 9, 36, 0.06)',
        'floating': '0 20px 40px -10px rgba(35, 8, 202, 0.16)',
        'glow-red': '0 8px 25px -4px rgba(207, 9, 36, 0.45)',
        'glow-blue': '0 8px 25px -4px rgba(35, 8, 202, 0.40)',
        'glow-yellow': '0 8px 25px -4px rgba(255, 204, 51, 0.50)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        'xl3': '1.75rem',
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
