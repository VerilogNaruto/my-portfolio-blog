import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../containers/Layout'
import Posts from '../components/shared/Posts'
import { PageTitle } from '../components/shared/Text'

export default class Blog extends React.Component {

  render() {
    const {data} = this.props
    return (
      <Layout>
    <PageTitle>Blog</PageTitle>
    <Posts
      posts={data.allWordpressPost.edges}
    />
  </Layout>
    )
  }
}

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
        id
        slug
        title
        date
        }
      }
    }
  }
`
