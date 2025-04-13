/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Certifique-se de que seus arquivos JSX estão sendo processados
  ],
  theme: {
    extend: {
      height: {
        '40rem': '40rem', // Adiciona a altura customizada de 60rem
      },
    },
  },
  plugins: [],
}