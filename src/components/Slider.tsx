import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./Slider.scss"
import Cart from "../../content/assets/supermarket.svg"
import Arrow from "../../content/assets/arrow.svg"

const Slider: React.FC = () => {
  const menu = useStaticQuery(graphql`
    query {
      avocado: file(relativePath: { eq: "avocado.jpg" }) {
        childImageSharp {
          fixed(width: 110, height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      eggs: file(relativePath: { eq: "eggs.jpg" }) {
        childImageSharp {
          fixed(width: 110, height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      salomon: file(relativePath: { eq: "salomon.jpg" }) {
        childImageSharp {
          fixed(width: 110, height: 110) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="slider">
      <div className="slider__header">
        <h2>Latest recipes</h2>
        <div className="slider__buttons">
          <button className="forward">
            <Arrow />
          </button>
          <button>
            <Arrow />
          </button>
        </div>
      </div>
      <div className="slider__recipes">
        <div className="recipe">
          <div className="recipe__img">
            <Img
              fixed={menu.eggs.childImageSharp.fixed}
              imgStyle={{ borderRadius: "100%" }}
            />
          </div>
          <div className="recipe__box">
            <p>Portobello Baked Eggs with avocado & bread</p>
            <div className="recipe__box-footer">
              <p>8$</p>
              <div className="recipe__box-footer-cart">
                <Cart />
              </div>
            </div>
          </div>
        </div>
        <div className="recipe">
          <div className="recipe__img">
            <Img
              fixed={menu.salomon.childImageSharp.fixed}
              imgStyle={{ borderRadius: "100%" }}
            />
          </div>
          <div className="recipe__box">
            <p>Summery salomon, beetroot &spicy mix</p>
            <div className="recipe__box-footer">
              <p>15$</p>
              <div className="recipe__box-footer-cart">
                <Cart />
              </div>
            </div>
          </div>
        </div>
        <div className="recipe">
          <div className="recipe__img">
            <Img
              fixed={menu.avocado.childImageSharp.fixed}
              imgStyle={{ borderRadius: "100%" }}
            />
          </div>
          <div className="recipe__box">
            <p>Backed Avocado Eggs with herbs</p>
            <div className="recipe__box-footer">
              <p>8$</p>
              <div className="recipe__box-footer-cart">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
