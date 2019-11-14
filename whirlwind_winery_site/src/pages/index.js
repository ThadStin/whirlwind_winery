import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Whirlwind Winery" />
    <h1>Artisan Wines</h1>
    <p>Welcome to Whirlwind Winery!</p>
    <p>The best wine in Watonga, OK.  Guaranteed!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
