const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { format } = require('date-fns');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  console.log(node.internal.type);
  // if (node.internal.type === `wordpress__POST`) {
  //   const slug = createFilePath({ node, getNode, basePath: `posts` })
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: `/blog${ slug }`,
  //   })
  //   createNodeField({
  //     node,
  //     name: `date`,
  //     value: format(new Date(node.date), 'MMM dd, yyyy'),
  //   })
  // }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              date
            }
          }
        }
      }
    `).then(result => {
      result.data.allWordpressPost.edges.forEach(({ node }) => {
        createPage({
          path: `/blog/${node.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: { id: node.id },
        });
      });
      resolve();
    });
  });
};
