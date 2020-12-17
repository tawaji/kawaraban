import React from "react"
import { Link } from "gatsby"
import { graphql　} from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{  marginBottom: `1.45rem` }}>
      <p>なにか説明文を入れる？なにか説明文を入れる？なにか説明文を入れる？なにか説明文を入れる？なにか説明文を入れる？なにか説明文を入れる？なにか説明文を入れる？</p>
      <div style={{  maxWidth: `300px` }}>
        <Image />
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}



    {data.allMicrocmsArticles.edges.map(edge => {
     const articles = edge.node
     const category = edge.node.category[0].name

    //  if (category == 'information') {
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
    //  } else { return }
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

export default IndexPage
