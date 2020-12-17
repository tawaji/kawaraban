import React from "react"
import { graphql　} from "gatsby"
import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"


const InformationPage = ({ data }) => (
 <Layout>
   <SEO title="テスト" />

   {data.allMicrocmsArticles.edges.map(edge => {
     const articles = edge.node
     const category = edge.node.category[0].name

     if (category == 'information') {
       return (
        <React.Fragment key={articles.id}>
         <div>
            <Link to={`/articles/${edge.node.title}`}>
                <h2>{articles.title}</h2>
             </Link>
           <img
             src={articles.pict.url}
             width={110}
             height={110}
             alt="pict画像"
           />
         </div>
         <div>
             {articles.category.map(category => (
               <React.Fragment key={category.id}>
                 <span>カテゴリー：{category.name}</span>
               </React.Fragment>
             ))}
        </div>
        <hr />
       </React.Fragment>
       )
     } else { return }
   })}
 </Layout>
)

export const query = graphql`
 {
    allMicrocmsArticles(
     sort: { fields: [createdAt], order: DESC }
   ) {
     edges {
       node {
         id
         title
         category {
           id
           name
         }
         pict {
           url
         }
         body
       }
     }
   }
 }
`

export default InformationPage