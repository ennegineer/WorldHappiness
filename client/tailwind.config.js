/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair', 'serif']
      },
      colors: {
        coral: '#ff5e5b',
        gray: '#F3F5F7',
        // Coral Accent
        accent: '#ff5e5b',
        // Blue Accent
        // accent: '#00CCC9',
        'dark-gray': '#212529'
      }
    },
  },
  plugins: [],
}

