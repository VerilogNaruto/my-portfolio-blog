import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import ThemeContext from '../contexts/ThemeContext'
import Header from '../components/shared/Header'
import { themes } from '../theme/globalStyles'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name 
              link
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: "Hi, my name is Souleymane Dembele and I'm a college graduate and self-taught developer." },
                { name: 'keywords', content: 'Souleymane, Souleymane Dembele, javascript developer, seattle web developer' },
                { property: 'og:type', content: 'profile' },
                { property: 'og:title', content: 'Souleymane Dembele | Software Enginner' },
                { property: 'og:site_name', content: 'Souleymane Dembele | Software Engineer' },
                { property: 'og:url', content: 'https://souleymanedembele.com' },
                { property: 'profile:first_name', content: 'Souleymane' },
                { property: 'profile:last_name', content: 'Dembele' },
              ]}
            >
              <html lang="en" />
            </Helmet>
              <ThemeProvider theme={themes[theme]}>
                <Wrapper>
                  <GlobalStyle />
                  <Header
                    menuLinks={data.site.siteMetadata.menuLinks}
                    siteTitle={data.site.siteMetadata.title}
                    toggleTheme={toggleTheme}
                    theme={theme}
                  />
                  {children}
                </Wrapper>
              </ThemeProvider>
          </>
        )}
      </ThemeContext.Consumer>
    )}
  />
)

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${ props => props.theme.background };
  }

  a {
    text-decoration: none;
    color: ${ props => props.theme.secondary };
  }
  a {
    :hover {
      text-decoration: underline;
      color: ${ props => props.theme.secondary };
    }
  }

  h2, h3, h4, h5 {
    color: ${ props => props.theme.title };
  }
  dd, li, p {
    color: ${ props => props.theme.contentColor };
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
