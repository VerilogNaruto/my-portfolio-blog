import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../containers/Layout'
import Posts from '../components/shared/Posts'
import { PageTitle } from '../components/shared/Text'

const Blog = ({ data }) => (
  <Layout>
    <PageTitle>Blog</PageTitle>
    <Posts
      posts={data.allMdx.edges}
    />
  </Layout>
)

export const query = graphql`
  query {
    allMdx (sort: { fields: [fields___publishedAt], order: DESC }) {
      edges {
        next {
          frontmatter {
            title
            date
          }
        }
        previous {
          frontmatter {
            title
            date
          }
        }
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            publishedAt
            slug
          }
        }
      }
    }
  }
`

export default Blog
