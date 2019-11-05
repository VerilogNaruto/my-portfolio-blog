import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Switch } from './form'
import { media } from '../../utils/utils'
import SocialLinks from './SocialLinks'

const Header = ({ menuLinks, siteTitle, toggleTheme, theme }) => (
  <React.Fragment>
    <Switch
      toggleTheme={toggleTheme}
      theme={theme}
    />

    <Nav>
      <h2
        style={{
          margin: 0,
          fontSize: '22px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/">
          {siteTitle}
        </Link>
      </h2>

      <SocialLinks toggleTheme={toggleTheme} />

      <HeaderLink>
        {menuLinks.map(link =>
          <li
            key={link.name}
            style={{
              listStyle: 'none',
              margin: '0 15px',
            }}
          >
            <Link to={link.link}>{link.name}</Link>
          </li>
        )}
      </HeaderLink>
    </Nav>
  </React.Fragment>
)

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;

  ${ media.mobile`grid-template-columns: 50% 50%;` }
`

const HeaderLink = styled.ul`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  grid-column: 2 / 3;
  grid-row: 1;
  height: 100%;

  ${ media.tablet`
    grid-column: 1 / span 3;
    grid-row: 2;
  ` }

  ${ media.mobile`
    grid-column: 1 / span 3;
    grid-row: 2;
  ` }
`

export default Header
