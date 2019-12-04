import React from 'react';

import Layout from '../containers/Layout';
import { PageTitle, PageSubTitle } from '../components/shared/Text';

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
  </Layout>
);

export default Contact;
