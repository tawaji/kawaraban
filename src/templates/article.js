//templates/article.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const ArticlePost = props => {
 const post = props.data.microcmsArticles // ㊟allMicrocmsArticleでない
 return (
   <Layout>
     <div>
       <h2>{post.title}</h2>
       <br />
       <img
         src={post.pict.url}
         width={160}
         height={110}
         alt="pict画像"
       />
       <p
         dangerouslySetInnerHTML={{
           __html: `${post.body}`,
         }}
       ></p>
     </div>
   </Layout>
 )
}

export default ArticlePost

export const query = graphql`
 query($id: String!) {
   microcmsArticles(id: { eq: $id }) {
     title
     body
     pict {
       url
     }
     body
   }
 }
`