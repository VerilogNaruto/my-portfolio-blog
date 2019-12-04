import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { createGlobalStyle } from 'styled-components';

import Layout from '../containers/Layout';
import { PageTitle } from '../components/shared/Text';

class BlogPost extends React.Component {
  componentDidMount() {
    if (typeof window.twttr.widgets !== 'undefined') {
      window.twttr.widgets.load();
    }
  }

  render() {
    const post = this.props.data.mdx;

    return (
      <Layout>
        <Helmet
          title={`${post.frontmatter.title} | Souleymane`}
          meta={[
            {
              name: 'description',
              content: `Check out this post ${post.frontmatter.title} by Souleymane Dembele.`,
            },
            {
              property: 'og:title',
              content: `${post.frontmatter.title} | Souleymane Dembele`,
            },
            {
              property: 'og:url',
              content: `https://souleymanedembele.com/${post.fields.slug}`,
            },
          ]}
        />
        <GlobalStyle />
        <PageTitle blogPost>{post.frontmatter.title}</PageTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
          }}
        >
          <a
            className="twitter-share-button"
            style={{ marginBottom: 0 }}
            href="https://twitter.com/intent/tweet"
            data-size="large"
            data-text={`${post.frontmatter.title}`}
            data-url={`https://souleymanedembele.com${post.fields.slug}`}
            data-hashtags="EpicSociety,NarutoDev,Souleymane"
            data-via="souleymane"
            data-related="coding,react,javascript"
          >
            Tweet
          </a>
        </div>

        <MDXRenderer>{post.body}</MDXRenderer>
      </Layout>
    );
  }
}

export default BlogPost;

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  code {
    display: block;
  }

  img {
    display: block;
    margin: 10px auto;
  }
`;
