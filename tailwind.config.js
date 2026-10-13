/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4D8EFF',
          light: '#EBF2FF',
          dark: '#2B6EE3',
          hover: '#3A7BEB',
        },
        surface: {
          base: '#FFFFFF',
          subtle: '#F8FAFC',
          muted: '#F1F5F9',
          border: '#E2E8F0',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#ECFDF5',
          text: '#047857',
        },
        danger: {
          DEFAULT: '#EF4444',
          light: '#FEF2F2',
          text: '#B91C1C',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.06)',
        card: '0 4px 16px -4px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
