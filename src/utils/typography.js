import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-twin-peaks'

twinPeaksTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    textShadow: 'none',
    backgroundImage: 'none',
  },
})

const typography = new Typography(twinPeaksTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
