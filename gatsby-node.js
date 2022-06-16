const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const res = await graphql(`
    query {
      allSanityPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  res.data.allSanityPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug.current}`,
      component: blogTemplate,
      context: {
        slug: edge.node.slug.current
      }
    })
  })
}
