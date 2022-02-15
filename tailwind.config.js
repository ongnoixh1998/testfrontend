module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth:{
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      '10rem':'10rem',
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'sans': 'Helvetica, Arial, sans-serif',
    },
    extend: {
      keyframes: {
        fadeIn:{
          '0%': {opacity : 0 },
          '100%': {opacity : 1 },
        }

      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out infinite',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
