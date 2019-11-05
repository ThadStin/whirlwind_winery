import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Wines = () =>
<Layout>
  <SEO title="Whirlwind Winery" />
    <h1> Cabernet </h1>
  <Link to="/">Go back to the homepage</Link>
  <Link to="/page-2/">The Winery</Link>
</Layout>

export default Wines
