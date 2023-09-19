/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/components/**/*.tsx'],
  theme: {
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'dd-dark-purple': '#0F0825',
        'dd-light-purple': '#DA00FD',
        'dd-yellow': '#F3EFD3',
        'dd-gold': '#FFC001',
      },
    },
  },
  plugins: [],
}
