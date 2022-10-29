/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'facebook-blue': '#1877F2',
        'gray-background': '#F0F2F5',
        'text-second': '#0f172a',
        'green-facebook': '#36A420',
      },
      spacing: {
        '580': '580px',
        '380': '380px',
      },
    },
  },
  plugins: [],
}
