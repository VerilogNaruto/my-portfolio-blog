import React from 'react';
import styled from 'styled-components';
import Preview from '../../images/Preview.svg';
import SlackClone from '../../images/slackclone.png';
import ScavengerHunt from '../../images/scqvenger.png';
import Pathfinding from '../../images/pathfinging.png';
import Flowstate from '../../images/flowstate.png';

const Projects = ({ projects, title }) => (
  <div>
    <Container className="container">
      <Card
        href="https://keen-swanson-105d13.netlify.com"
        target="_blank"
        className="card"
      >
        <Image src={SlackClone} alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">SlackClone</CardTitle>
          <CardBody className="card__body">
            Realtime chat application using React and Redux.
          </CardBody>
          <ProjectTag>React, Redux, Sass, Firebase</ProjectTag>
        </CardText>
      </Card>
      <Card
        href="https://naruto958.github.io/Pathfinding/"
        target="_blank"
        className="card"
      >
        <Image src={Pathfinding} alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">Pathfindings</CardTitle>
          <CardBody className="card__body">Pathfindings Algorithms and Recursive Maze</CardBody>
          <ProjectTag>Html, Css, Bootstrap, Jquery</ProjectTag>
        </CardText>
      </Card>
    </Container>
    <Container className="container">
      <Card
        href="https://play.google.com/store/apps/details?id=com.spscc.mapApp"
        target="_blank"
        className="card"
      >
        <Image src={ScavengerHunt} alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">ScavengerHunt</CardTitle>
          <CardBody className="card__body">
            Geolocation crossplatform app using PhoneGap Cordova
          </CardBody>
          <ProjectTag>PhoneGap, Jquery, Css3</ProjectTag>
        </CardText>
      </Card>
      <Card
        href="https://flowstatecreatives.com/"
        target="_blank"
        className="card"
      >
        <Image src={Flowstate} alt="" className="card__img" />
        <CardText className="card__text">
          <CardTitle className="card__title">Flowstate</CardTitle>
          <CardBody className="card__body">Angency landing page build with Wordpress</CardBody>
          <ProjectTag>Wordpress, Html, Sass, Jquery</ProjectTag>
        </CardText>
      </Card>
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
const Card = styled.a`
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
  width:80%;
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
  width:100%;
  margin-bottom: 0;
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    width:100%;
  }
`;

const CardBody = styled.p`
  color: white;
  @media only screen and (max-width: 600px) {
    font-size: .8rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
  display: block;
  transition: opacity ease-out 250ms;
  margin:0;
`;

const ProjectSummary = styled.p`
  text-align: center;
  margin-top: 10px;
`;
const ProjectButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
`;
const ProjectTag = styled.small`
  background-color: ${props => props.theme.secondary};
  border: none;
  border-radius: 15px;
  color: white;
  margin: 0 auto;
  height: 30px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding-left: .1rem;
  padding-right: .1rem;
  @media only screen and (max-width: 600px) {
    font-size: .8rem;
    width: 100%;
  }
`;

const ProjectButton = styled.a`
  height: 40px;
  border: 2px solid ${props => props.theme.secondary};
  padding: 5px 15px;
  font-size: 0.87rem;
`;

export default Projects;
