import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Wines = () =>
<Layout>
  <SEO title="Whirlwind Winery" />
  <div>
    <h1>Real Grapes</h1>
    <h3>Real wine</h3>
  </div>
  <Link to="/">Home</Link>
  <Link to="/page-2/">The Winery</Link>
  <Link to="/wines/">The Wines</Link>
</Layout>

export default Wines
