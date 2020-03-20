import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-component'
import Layout from "../components/layout"



const WatercolorPage = ({ data }) => <Layout>
  <div className="main-container">
            <section className="page-title page-title-4 bg-secondary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="uppercase mb0">Watercolors</h3>
                        </div>
                        <div className="col-md-6 text-right">
                            <ol className="breadcrumb breadcrumb-2">
                                <li>
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Portfolio</Link>
                                </li>
                                <li className="active">Watercolors</li>
                            </ol>
                        </div>
                    </div>
                </div>
                </section>
     <section className="projects pt48">
     
                <div className="container">
                    

                    
                    <Masonry
                className={'showcase row'} >
                   
                    {data.allDatoCmsWork.edges.map(({ node: work }) => (
                        <div className="col-md-4 showcase__item" data-filter="People" key={work.slug}>
                            <div className="image-tile hover-reveal text-center" style={{display:'block'}}>
                                <Link to={`/works/${work.slug}`}  style={{display:'block'}}>
                                    <Img fluid={work.coverImage.fluid} alt="Pic" style={{display:'block'}}/>
                                    <div className=" inner-title">
                                    <div className="title">
                                        <h5 className="uppercase mb0">{work.title}</h5>
                                        <span>{work.excerpt}</span>
                                    </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        ))}
                        </Masonry>

                        </div>

                        </section>
     </div>
      
  </Layout>

export default WatercolorPage

export const query = graphql`
  query WatercolorQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
