import React from 'react'

const defaultState = {
  theme: 'main',
  toggleTheme: {}
}
const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends React.PureComponent {
  state = {
    theme: 'main'
  };

  componentDidMount () {
    const theme = JSON.parse(window.localStorage.getItem('theme'))

    if (theme) {
      if (theme === 'main') {
        this.setState({ theme: 'main' })
      } else {
        this.setState({ theme: 'dark' })
      }
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({ theme: prevState.theme === 'main' ? 'dark' : 'main' }), () => {
      // Update app current theme
      window.localStorage.setItem('theme', JSON.stringify(this.state.theme))
    })
  }

  render () {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext
export { ThemeProvider }
