import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440
    }
  },
  theme: {
    defaultTheme: 'main',
    themes: {
      main: {
        dark: false,
        colors: {
          'background-primary': 'rgb(0, 0, 0)',
          'background-secondary': 'rgb(33, 33, 33)',
          'background-light': '#a2c3eb',
          'white': '#ffffff',
        }
      }
    }
  }
})
