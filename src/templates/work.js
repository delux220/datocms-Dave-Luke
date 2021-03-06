import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql , Link} from 'gatsby'
import Layout from "../components/layout"


export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        {(data.datoCmsWork.gallery.length>1)&&<div className="sheet__slider">
          <Slider infinite={true} slidesToShow={1} arrows={true} autoplay={true}>
            {data.datoCmsWork.gallery.map(({ fluid }) => (
              <div><img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} style={{maxHeight:'480px'}}/></div>
              
            ))}
          </Slider>
        </div>}
        <button className="myButton" style={{marginBottom:'28px', display:'block'}}>Buy Print for $9.99</button>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
        
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsWork.coverImage.fluid} />
        </div><ul class="sidebar__menu"><li><a href="/">Go Back</a></li></ul>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
