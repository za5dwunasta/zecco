import React from "react"
import Header from "../components/Header"
import Layout from "../components/layout"
import Shop from "../components/Shop"
import Slider from "../components/Slider"

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Shop />
      <Slider />
    </Layout>
  )
}

export default Home
