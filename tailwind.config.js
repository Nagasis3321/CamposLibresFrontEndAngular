/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    "darkMode": 'class',
    "ligthMode": 'class',
    
    extend: {
      screens:{
        '3xl': '1920px'
      },
      colors: {
        primary: "#2A617E",
        "backGround-100": "#66A8CC",
        "backGround-200": "#C9EDED",
        "backGround-300": "#F4FBF9",
        "backGround-400": "#8C8C8C",
        "backGround-500": "#2B2B2B",
        "backGround-600": "#292929",
        "backGround-700": "#0D0D0D",
      },

    },
  },
  plugins: [],
}

