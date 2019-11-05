import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { PageTitle } from '../components/shared/Text'
import Layout from '../containers/Layout'
import Button from '../components/shared/Button'
import Posts from '../components/shared/Posts'
import Projects from '../components/shared/Projects'

export default ({ data }) => (
  <Layout>
    <Section>
      <PageTitle align="left">Software Engineer</PageTitle>
      <p>Hi, my name is Souleymane Dembele and I'm a college graduate and self-taught developer in Seattle, WA area. This blog will be used to track my progress as I continue my career and grow.</p>

      <Button to='/about'>Read more</Button>
    </Section>

    <Section>
      <SectionTitle>Latest Posts</SectionTitle>
      <Posts posts={data.allMdx.edges} />
      <Button to='/blog' section='true'>View All</Button>
    </Section>

    <Section>
      <SectionTitle>Latest Projects</SectionTitle>
      <Projects />
    </Section>

  </Layout>
)

export const query = graphql`
  query {
    allMdx (sort: { fields: [fields___publishedAt], order: DESC }, limit: 5) {
      edges {
        next {
          frontmatter {
            title
          }
        }
        previous {
          frontmatter {
            title
          }
        }
        node {
          id
          frontmatter {
            title
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

const SectionTitle = styled.h2`
  color: ${ props => props.theme.title };
`

const Section = styled.section`
  padding: 40px 0;
`
