import React from 'react';
import styled from 'styled-components';
import Layout from '../containers/Layout';
import { PageTitle, PageSubTitle } from '../components/shared/Text';
import Approve from '../images/approve.svg';

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    isActive: '',
  };

  async postEmail(url, method = 'POST', payload = {}) {
    let data = {
      method,
      body: JSON.stringify(payload),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ',
      }),
    };

    let response = await fetch(url, data);
    if (response.ok) {
      let contentType = response.headers.get('Content-Type');

      if (contentType.indexOf('application/json') > -1) {
        return response.json();
      }

      return response.statusText;
    }
    throw response;
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let email = await this.postEmail(
      'https://souleymanedembelebackend.herokuapp.com/api/contact',
      'POST',
      {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      },
    );

    if(email.message === 'success'){
      this.displaySuccess();
    }
    
  };

  displaySuccess() {
    this.setState({ isActive: 'is-active' });
  }

  closeSuccess() {
    this.setState({ isActive: '', name: '', email: '', message: '' });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Layout>
        <PageTitle>Get In Touch</PageTitle>
        <PageSubTitle>
          Are you interested in working with me or just have a question?
        </PageSubTitle>
        <PageSubTitle>
          Email me at{' '}
          <a href="mailto:souleymane11dembele@gmail.com">
            souleymane11dembele@gmail.com
          </a>
          {' '} Or fill the following form
        </PageSubTitle>
        <FormContainer>
          <EmailForm onSubmit={this.handleSubmit}>
            <Label>
              <LabelTitle className="title">Name</LabelTitle>
              <InputField
                placeholder="Name"
                type="text"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </Label>
            <Label>
              <LabelTitle>Email</LabelTitle>
              <InputField
                placeholder="Email"
                type="email"
                name="email"
                required
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Label>
            <Label>
              <LabelTitle>Message</LabelTitle>
              <Textarea
                placeholder="Message"
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
              ></Textarea>
            </Label>
            <Button type="submit">Submit</Button>
          </EmailForm>
        </FormContainer>
        <ModalContainer className={isActive}>
          <Modal className="modal js-modal">
            <ModalImage className="modal-image">
              <ModalImageImage src={Approve} alt="success" />
            </ModalImage>
            <h1>Nice job!</h1>
            <p>
              I will check my mail box by 9pm and I will follow up.To dismiss
              click the button below
            </p>
            <Button
              className="js-close"
              onClick={() => {
                this.closeSuccess();
              }}
            >
              Dismiss
            </Button>
          </Modal>
        </ModalContainer>
      </Layout>
    );
  }
}

const ModalContainer = styled.div`
  background-color: ${props => props.theme.background};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  with: 0;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease-out;
  &.is-active {
    display: flex;
    width: 100%;
    z-index: 1;
    opacity: 1;
    visibility: visible;
  }
`;
const Modal = styled.div`
  background-color: #fff;
  padding: 2em 3em;
  text-align: center;
  border-radius: 0.5em;
  transition: all 0.4s ease-out;
  h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 2em;
    color: #666;
  }
`;
const ModalImage = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #48db71;
  padding: 11px 10px 2px;
  margin-bottom: 2em;
`;
const ModalImageImage = styled.img``;

const FormContainer = styled.div`
  margin: 0 auto;
`;
const EmailForm = styled.form`
  width: 100%;
`;

const Label = styled.label`
  color: ${props => props.theme.title};
`;

const LabelTitle = styled.span`
  display: block;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 8rem;
  &:focus {
    outline: none;
  }
  padding-left: 0.5rem;
  border: none;
  background: ${props => props.theme.background};
  color: ${props => props.theme.title};
  border: ${props => props.theme.secondary} 0.1rem solid;
`;
const InputField = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  border: none;
  background: ${props => props.theme.background};
  color: ${props => props.theme.title};
  border: ${props => props.theme.secondary} 0.1rem solid;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: ${props => props.theme.secondary};
  background-image: none;
  border: none;
  color: #fffffc;
  width: 100%;
  height: 45px;
  border-radius: 75px;
  margin-top: ${props => (props.section ? '15px' : '5px')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;
