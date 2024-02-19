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
    },
  },
  plugins: [],
}
