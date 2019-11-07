import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Wines = () =>
<Layout>
  <SEO title="Whirlwind Winery" />
  <div>
    <h1>REDS</h1>
      <h3> Cabernet </h3>
      <h3> Sangiovese </h3>
      <h3> Merlot </h3>
    <h1>Whites</h1>
      <h3> Chardonnay </h3>
    <h1>Rose`</h1>
      <h3> Pinot Grigio </h3>
  </div>
  <Link to="/">Home</Link>
  <Link to="/page-2/">The Winery</Link>
</Layout>

export default Wines
