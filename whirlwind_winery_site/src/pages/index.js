import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Whirlwind Winery" />
    <h1>Whirlwind Winery</h1>
    <p>Welcome to Whirlwind Winery!</p>
    <p>The best wine in Watonga, OK.  Guaranteed!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">The Winery</Link>
    <Link to="/wines/"> The wines </Link>
  </Layout>
)

export default IndexPage
