/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add custom fonts here
        lexendSemiBold: ['Lexend-SemiBold', 'sans-serif'],
        lexendThin: ['Lexend-Thin', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 20s linear infinite', // Optional for smooth animation (if using keyframes)
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
