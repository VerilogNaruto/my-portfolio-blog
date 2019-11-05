import React from 'react'
import styled from 'styled-components'

import { media } from '../../utils/utils'

import ExtLink from './ExtLink'

import Moon from '../../images/moon.svg'
import Github from '../../images/github.svg'
import Twitter from '../../images/twitter.svg'
import Linkedin from '../../images/linkedin.svg'
import Youtube from '../../images/youtube.svg'

const SocialLinks = ({ toggleTheme }) => {
  return (
    <SocialWrapper>
      <SocialLink>
        <ExtLink href="https://github.com/naruto958">
          <SocialImg src={Github} alt="Github" />
        </ExtLink>
      </SocialLink>

      <SocialLink>
        <ExtLink href="https://twitter.com/Skill_Road">
          <SocialImg src={Twitter} alt="Twitter" />
        </ExtLink>
      </SocialLink>

      <SocialLink>
        <ExtLink href="https://www.youtube.com/channel/UCIF712HdDs5gARYly1Smn0w">
          <SocialImg src={Youtube} alt="Youtube channel" />
        </ExtLink>
      </SocialLink>

      <SocialLink>
        <ExtLink href="https://www.linkedin.com/in/souleymane-dembele-124761147/">
          <SocialImg src={Linkedin} alt="Linkedin" />
        </ExtLink>
      </SocialLink>
    </SocialWrapper>
  )
}

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 3 / 4;
  grid-row: 1;
  height: 100;

  ${ media.mobile`
    grid-column: 2 / 3;
  ` }
`

const SocialImg = styled.img`
  width: 100%;
`

const SocialLink = styled.li`
  list-style-type: none;
  margin: 0 15px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  transition: .3s ease;

  :last-child {
    margin-right: 0;
  }

  :hover {
    transform: translateY(-5px);
    transition: .3s ease;
  }
`

export default SocialLinks
