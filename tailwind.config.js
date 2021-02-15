module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.scss'],
  theme: {
    extend: {
      colors: {
        primary: "#2B0A3D", //Deep Purple
        hover: "#ececec",
        zestGreen: "#95e616",
        darkGray: "#707070",
        techRed: "#FF304C",
        sogetiRed: "#FF4411",
        vibrantBlue: "#12B3DB",
        capBlue: "#0070AD"
      },
      fontSize: {
        '2xs': '.60rem',
        '3xs': '.50rem'
      },
      margin: {
        '1.5': '0.4rem',
      },
      backgroundColor: theme => ({
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }),
      boxShadow: {
        medium: '0px 17px 10px -10px rgba(0,0,0,0.4)',
        border:'3px solid black'
      }
    },
  },
  variants: {},
  plugins: [],
}