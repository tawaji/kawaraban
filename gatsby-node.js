/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// gatsby-node.js
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
 const { createPage } = actions

 const result = await graphql(
   `
     {
        allMicrocmsArticles {
         edges {
           node {
             id
             title
             category {
                id
                name
             }
             body
             pict {
                 url
             }
           }
         }
       }
     }
   `
 )

 if (result.errors) {
   throw result.errors
 }

 result.data.allMicrocmsArticles.edges.forEach(edge => {
    createPage({
      path: `/articles/${edge.node.title}`,
      component: path.resolve(
        "./src/templates/article.js"
      ),
      context: {
        id: edge.node.id,
      },
    })
 
  })
}