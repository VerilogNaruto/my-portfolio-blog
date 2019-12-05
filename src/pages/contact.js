import React from 'react';
import styled from 'styled-components';
import Layout from '../containers/Layout';
import { PageTitle, PageSubTitle } from '../components/shared/Text';

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(`Welcome ${this.state.name} ${this.state.email}!  ${this.state.message}`);
  };

  render() {
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
          {' | '} Or fill the following form
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
      </Layout>
    );
  }
}

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
  width: 150px;
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
