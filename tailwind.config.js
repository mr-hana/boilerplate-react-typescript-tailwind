module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.ts', './src/**/*.tsx',],
  },
  theme: {
    colors: {
      primary: {
        default: '#ff3d00',
        light: '#ff7539',
        dark: '#c30000'
      },
      secondary: {
        default: '#4db6ac',
        light: '#82e9de',
        dark: '#00867d'
      },
      black: '#363636',
      white: '#FFFFFF',
      offwhite: '#E3E3E3',
      gray: {
        default: '#A0AEC0',
        light: '#EDF2F7',
        dark: '#4A5568'
      }
    }
  },
  variants: {},
  plugins: [],
}
