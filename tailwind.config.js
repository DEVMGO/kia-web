/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy_blue_dark: '#1f2345',
        navy_blue: '#262b4f',
        navy_light_blue: '#424b79',
        aqua: '#00ffff',
        purple: '#6f79de',
        dark_purple: '#3b4271',
        kia_red: '#ed8380',
      },
      backgroundImage: {
        'section_one': "url('/public/assets/imgs/bg1.jpg')",
      },
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(150px, 1fr))",
        17: "repeat(auto-fit, minmax(160px, 1fr))",
        18: "repeat(auto-fit, minmax(200px, 1fr))",
        19: "repeat(auto-fit, minmax(250px, 1fr))",
        20: "repeat(auto-fit, minmax(270px, 1fr))",
        21: "repeat(auto-fit, minmax(280px, 1fr))",
        22: "repeat(auto-fit, minmax(450px, 1fr))",
      },
      screens: {
        res1: "1410px",
        res2: "1230px",
        res3: {'max': '640px'},
        res4: {'max': '700px'},
        res5: {'max': '900px'},
        res6: {'max': '1000px'},
        res7: {'max': '1200px'},
      },
    },
  },
  plugins: [],
}