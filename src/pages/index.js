import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (

  <Layout>
           <section className="cover fullscreen parallax image-bg overlay" style={{backgroundColor:'#fff'}}>
           <div className="background-image-holder" style={{opacity:.7}}>
                    <img alt="image" className="background-image" src={data.datoCmsPage.heroImage.fluid.src} style={{display:'block !important'}}/>
                </div>
                <div className="container v-align-transform">
                    <div className="row">
                        <div className="col-sm-12 text-right text-dark" >
                            <h1 className="uppercase large mb8">
                                <strong>Dave</strong>Luke</h1>
                            <h5 className="mb0">{data.datoCmsPage.tagline}</h5>
                        </div>
                    </div>
                   
                </div>
                
                <div className="align-bottom text-center">
                    <ul className="list-inline social-list mb24">
                        <li>
                            <a href="#">
                                <i className="ti-twitter-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ti-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ti-dribbble"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="ti-vimeo-alt"></i>
                            </a>
                        </li>
                    </ul>
                </div>

               
            </section>
            <section className="pt-1 pb0">
            {data.datoCmsPage.blocks.map((block) => (
                
                <div className="col-sm-6 text-center p0 border-thick">
                    <div className="image-tile hover-tile text-center mb0">
                        <img alt="image" className="background-image" src={block.coverImage.fluid.src} />
                        <div className="hover-state">
                            <Link to={block.link}>
                                <h3 className="uppercase mb8">{block.title}</h3>
                                <h6 className="uppercase">{block.action}</h6>
                            </Link>
                        </div>
                    </div>
                  
                </div>
                
            
              ))}
              </section>
            
 

    
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    datoCmsPage(slug: { eq: "index" }) {
      
      title
      tagline
      bodyNode {
         childMarkdownRemark {
          html
        }
      }
      heroImage {
            fluid(maxWidth: 1800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
      blocks {
        title
        coverImage {
            fluid(maxHeight: 480, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
          link
          action
      }
      
    }
  }
`
