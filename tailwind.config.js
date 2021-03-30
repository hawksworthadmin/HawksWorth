module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      'blue1': '#2B3367',
    }),
    extend: {
      zIndex: {
        '2': '2'
      },
      width:{
        '394':'394px',
        '454':'454px',
        '998':'998px',
        '800':'800px'
      },
      paddingTop:{
        '25':'25px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
