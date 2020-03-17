import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const PetsPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsPet.edges.map(({ node: pet }) => (
        <div key={pet.id} className="showcase__item">
          <figure className="card">
            <Link to={`/pets/${pet.slug}`} className="card__image">
              <Img fluid={pet.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/pets/${pet.slug}`}>{pet.title}</Link>
              </h6>
              <div className="card__description">
                <p>{pet.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
)

export default PetsPage

export const query = graphql`
  query PetsQuery {
    allDatoCmsPet(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          description
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
