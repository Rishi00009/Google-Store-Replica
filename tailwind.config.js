// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'google-blue': '#1a73e8',
        'google-gray': '#5f6368',
        'google-light-gray': '#f8f9fa',
      },
    },
  },
  plugins: [],
}