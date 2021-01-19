import React, { useRef, useEffect } from "react"
import Button from "./Button"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Shop.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Shop: React.FC = () => {
  const animate = useRef()
  useEffect(() => {
    gsap.from([animate.current], {
      x: "-1000px",
      duration: 2,
      scrollTrigger: {
        trigger: [animate.current],
        start: "top center",
        end: "top 100px",
        scrub: true,
        id: "scrub",
      },
    })
  })
  const shopimage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "vegetables.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="shoparea">
      <div className="shoparea__img">
        <div className="shoparea__img-container" ref={animate}>
          <Img
            fluid={shopimage.placeholderImage.childImageSharp.fluid}
            // imgStyle={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="shoparea__text">
        <h2>We make it easy for you to cook delicious dinners</h2>
        <p>
          Simply choose your recipes from a weekly menu and we’ll deliver
          freshly picked vegetables, pre-portioned ingredients and step-by-step
          recipes direct to your door ready for you to cook.
        </p>
        <Button text="shop now" additionalStyle="landing__button" />
      </div>
    </div>
  )
}

export default Shop
