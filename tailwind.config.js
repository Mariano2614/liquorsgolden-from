/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        '16': '4rem', // Tamaño más grande que h-12
        '20': '7rem', // Tamaño aún más grande
        card: '8rem',
      },
      width: {
        '16': '4rem',
        '20': '5rem',
        card: '16rem',  
      },
      colors: {
        letraNavBarHover: 'rgb(233,189,100)',
        letraNavBar: 'rgb(233,179,80)', // Aquí defines un color personalizado llamado "customBlue"
        customGreen: '#00cc66', // Otro color personalizado llamado "customGreen"
      },
    },
  },
  plugins: [],
}

