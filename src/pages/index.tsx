import React from "react"
import Header from "../components/Header"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Shop from "../components/Shop"
import Slider from "../components/Slider"

const Home: React.FC = () => {
  return (
    <Layout>
      {/* <SEO title="Home page!" /> */}
      <Header />
      <Shop />
      <Slider />
    </Layout>
  )
}

export default Home
