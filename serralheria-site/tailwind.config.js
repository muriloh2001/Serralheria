/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  
  theme: {
    extend: {
      height: {
        '40rem': '40rem',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 4s steps(40, end) ',
        blink: 'blink 0.75s step-end infinite',
        'typing-blink': 'typing 3s steps(40, end), blink 0.75s step-end infinite', 
      },
    },
  },
  plugins: [
  ],
}
