import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "./Button"
import "./Header.scss"

const Header: React.FC = () => {
  const headerimage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header_plate.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="header">
        <div className="header__text">
          <h1>You deserve better</h1>
          <p>Consider this a taste intervention</p>
          <Button text="learn more" additionalStyle="landing__button" />
        </div>

        <div className="header__background">
          <div className="header__background-container">
            <Img
              fluid={headerimage.placeholderImage.childImageSharp.fluid}
              // imgStyle={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
