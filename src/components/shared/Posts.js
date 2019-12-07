import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
const { format } = require('date-fns')

const Posts = ({ posts }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px'
    }}
  >
    {posts.map(post => {
      const {
        id,
        slug,
        title,
        date
      } = post.node

      return (
        <Link
        
          to={`/blog/${ slug }`}
          key={id}
        >
          <article
            style={{
              display: 'flex',
              margin: 'auto',
              borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
            }}
          >
            <Post
              style={{
                flex: 1
              }}
            >
              {title}
            </Post>
            <Published
              style={{
                textAlign: 'right',
              }}
            >
              {format(new Date(date), 'MMM dd, yyyy')}
            </Published>
          </article>
        </Link>
      )
    })}
  </div>
)

const Post = styled.h5`
  color: ${ props => props.theme.contentColor };
  flex: 1
`

const Published = styled.h5`
  color: ${ props => props.theme.secondary };
  text-align: right;
`

export default Posts
