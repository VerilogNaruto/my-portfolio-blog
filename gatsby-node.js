const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { format } = require('date-fns')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${ slug }`,
    })
    createNodeField({
      node,
      name: `publishedAt`,
      value: format(new Date(node.frontmatter.date), 'MMM dd, yyyy'),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: { id: node.id },
        })
      })
      resolve()
    })
  })
}
