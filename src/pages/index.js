import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
  <div style={{display:'block', clear:'both'}} className="page-header">
        <h1 className="page-title">{data.datoCmsPage.title}</h1>
        <div className="body" dangerouslySetInnerHTML={{
            __html: data.datoCmsPage.bodyNode.childMarkdownRemark.html,
          }}></div>
      </div>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsPage(slug: { eq: "index" }) {
      
      title
      bodyNode {
         childMarkdownRemark {
          html
        }
      }
      
    }
  }
`
