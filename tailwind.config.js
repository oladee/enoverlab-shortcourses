/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        blue : {
          100 : '#002890',
          200 : '#0046FF'
        },
        black : {
          100 : '#2D2F31',
          200 : '#3D3D3D'
        },
        green : {
          100 : '#00F3FF'
        }
      },
      fontFamily : {
        'inter' : ["Inter", 'serif']
      },
      backgroundImage : {
        'greenCircle' : "url('./assets/landing/greencircle.svg') no-repeat",
      }
    },
  },
  plugins: [],
}

