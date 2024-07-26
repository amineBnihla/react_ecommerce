/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors:{
        colorPrimary : "#EB5633",
        whiteColor : "#E2DFD7",
        gray_dark:"#27292C"
      },
      fontFamily:{
        poppins : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

