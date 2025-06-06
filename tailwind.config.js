/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // ✅ Set Metropolis sebagai default font sans
        sans: ['Metropolis', 'sans-serif'],
      },
      colors: {
        primaryBlue: '#01CEE1',
      },
    },
  },
  plugins: [],
};
