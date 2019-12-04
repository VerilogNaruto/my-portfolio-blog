import React from 'react';
import styled from 'styled-components';
import Layout from '../containers/Layout';
import { PageTitle, PageSubTitle } from '../components/shared/Text';
import Button from '../components/shared/Button';

const Contact = () => (
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
    </PageSubTitle>
    <FormContainer>
      <EmailForm>
        <Label>
          Name
          <InputField placeholder="Name" />
        </Label>
        <Label>
          Email
          <InputField placeholder="Email" />
        </Label>
        <Label>
          Message
          <Textarea placeholder="Message"></Textarea>
        </Label>
      </EmailForm>
      <Button>Send Email</Button>
    </FormContainer>
  </Layout>
);

const FormContainer = styled.div`
  margin: 0 auto;
`;
const EmailForm = styled.form`
  width: 100%;
`;

const Label = styled.label``;
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
    // border: none;
  }
`;

export default Contact;
