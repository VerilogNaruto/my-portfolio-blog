import React from 'react';
import styled from 'styled-components';
import Preview from '../../images/Preview.svg';

const Projects = ({ projects, title }) => (
  <div>
    <Container className="container">
      <Card className="card">
        <Image src="//unsplash.it/400/400" alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">SlackClone</CardTitle>
          <CardBody className="card__body">
            Realtime chat application using React, Managing state with Redux and
            Semantic UI and SASS for styling Component.
          </CardBody>
        </CardText>
      </Card>
      <Card className="card">
        <Image src="//unsplash.it/401/401" alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">Pathfindings</CardTitle>
          <CardBody className="card__body">And here is some text</CardBody>
        </CardText>
      </Card>
      {/* <ProjectWrapper>
      <ProjectTitle>Slack Clone (React)</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://keen-swanson-105d13.netlify.com' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Pathfindings Algo</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://naruto958.github.io/Pathfinding/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Old Portfolio (NuxtJs)</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://sdembele.me/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Flowstate Creatives</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://flowstatecreatives.com/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Control Dev</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://control-website-0.herokuapp.com/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Scavenger Hunt </ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://play.google.com/store/apps/details?id=com.spscc.mapApp' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper> */}
    </Container>
    <Container className="container">
      <Card className="card">
        <Image src="//unsplash.it/400/400" alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">ScavengerHunt</CardTitle>
          <CardBody className="card__body">
            Realtime chat application using React, Managing state with Redux and
            Semantic UI and SASS for styling Component.
          </CardBody>
        </CardText>
      </Card>
      <Card className="card">
        <Image src="//unsplash.it/401/401" alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">FlowstateCreatives</CardTitle>
          <CardBody className="card__body">And here is some text</CardBody>
        </CardText>
      </Card>
      {/* <ProjectWrapper>
      <ProjectTitle>Slack Clone (React)</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://keen-swanson-105d13.netlify.com' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Pathfindings Algo</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://naruto958.github.io/Pathfinding/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Old Portfolio (NuxtJs)</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://sdembele.me/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Flowstate Creatives</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://flowstatecreatives.com/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Control Dev</ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://control-website-0.herokuapp.com/' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper>

    <ProjectWrapper>
      <ProjectTitle>Scavenger Hunt </ProjectTitle>

      <ProjectButtonWrapper>
        <ProjectButton href='https://play.google.com/store/apps/details?id=com.spscc.mapApp' target='_blank'>View Site</ProjectButton>
      </ProjectButtonWrapper>
    </ProjectWrapper> */}
    </Container>
  </div>
);

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  position: relative;
  margin: 1em;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 1.25em;
    bottom: 1.25em;
    left: 1.25em;
    right: 1.25em;
    opacity: 1;
    transition: -webkit-transform ease-out 250ms;
    transition: transform ease-out 250ms;
    transition: transform ease-out 250ms, -webkit-transform ease-out 250ms;
  }
  &::before {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }
  &::after {
    border-left: 1px solid white;
    border-right: 1px solid white;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
  }
  &:hover::before {
    -webkit-transform: scale(1.05, 1);
    transform: scale(1.05, 1);
  }
  &:hover::after {
    -webkit-transform: scale(1, 1.05);
    transform: scale(1, 1.05);
  }
  &:hover .card__img {
    opacity: 0.4;
  }
  &:hover .card__text {
    opacity: 1;
  }
`;
const CardText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  transition: opacity ease-out 250ms;
//   background-image: url(${Preview});
//   background-repeat: no-repeat;
// background-position: center;
// background-size: cover;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 0;
`;

const CardBody = styled.p`
  color: white;
`;
const Image = styled.img`
  max-width: 100%;
  display: block;
  transition: opacity ease-out 250ms;
`;

{
  /* const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProjectWrapper = styled.div`
  display: flex;
  width: 350px;
  height: 450px;
  margin: 30px 0;
  background-color: inherit;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  align-items: center;
`

const ProjectTitle = styled.h4`
  margin: 0;
`
const ProjectButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const ProjectButton = styled.a`
  height: 40px;
  border: 2px solid ${ props => props.theme.secondary };
  padding: 5px 15px;
  font-size: .87rem;
`

const ProjectTag = styled.small`
  background-color: ${ props => props.theme.secondary };
  border: none;
  border-radius: 15px;
  color: white;
  margin: 0 auto;
  height: 30px;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`

const ProjectSummary = styled.p`
  text-align: center;
  margin-top: 10px;
` */
}

export default Projects;
