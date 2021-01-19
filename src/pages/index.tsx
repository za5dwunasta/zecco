import React from "react"
import Header from "../components/Header"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Shop from "../components/Shop"

const Home: React.FC = () => {
  return (
    <Layout>
      {/* <SEO title="Home page!" /> */}
      <Header />
      <Shop />
    </Layout>
  )
}

export default Home
