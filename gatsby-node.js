const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  /* eslint-disable no-useless-escape */
  const result = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/posts\//" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  /* eslint-enable no-useless-escape */

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/layouts/mdx.tsx'),
      context: { id: node.id },
      path: `/blog${node.frontmatter.slug}`,
    });
  });
};
