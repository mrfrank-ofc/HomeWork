/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Usando 'class' para controle manual do tema escuro
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Mulish', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },

      colors: {
        light: '#f9fafb',
        dark: '#111827',
        textLight: '#111827',
        textDark: '#f9fafb',
        headingLight: '#2d2e32',
        headingDark: '#f3f4f6',
      },
    },
  },
  plugins: [],
}
