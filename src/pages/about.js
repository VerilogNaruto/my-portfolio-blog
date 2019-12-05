import React from 'react';
import styled from 'styled-components';

import Layout from '../containers/Layout';
import { PageTitle, PageSubTitle } from '../components/shared/Text';
import Projects from '../components/shared/Projects';

export default class About extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  };
  render() {
    return (
      <Layout>
        <PageTitle>About Me</PageTitle>
        <PageSubTitle>Software Engineer 🚀</PageSubTitle>
        <p>
          Hi, my name is Souleymane Dembele I'm a college graduate and a
          self-taught developer. I currently live in Olympia, WA, but I'm am
          ready to Relocate in the Greater Seattle Area. I like to build new
          projects with JavaScript and also share what I've learned throughout
          my career as a developer to other people. Outside of programming I
          like to watch TV, spend time with my family and friends, learn new
          skills, and do fun stuff.
        </p>
        <h2>Workflow </h2>
        <dl>
          <dt>Computer ⌨️</dt>
          <dd>Macbook Air 13' 2015 | Dell Alienware R2 17.3' 2015</dd>

          <dt>Technologies 🔌</dt>
          <dd>
            JavaScript • React • Redux • Apollo • Node • Express • MySql •
            GraphQL • MongoDB • Nuxt
          </dd>

          <dt>Interests</dt>
          <dd>Python • Java • Machine Learning • AI • Blockchain • IOT</dd>

          <dt>Favorite Editor</dt>
          <dd>VSCode</dd>

          <h2>Hobbies</h2>
          <HobbyList>
            <li>✅ Learning</li>
            <li>✅ Traveling</li>
            <li>✅ TV</li>
          </HobbyList>
          <h2>Projects</h2>
          <Projects />
        </dl>
      </Layout>
    );
  }
}

const HobbyList = styled.ul`
  list-style: none;
  margin: 0;
`;
