import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2! This will eventually be the Winery page</p>
    <Link to="/">Home</Link>
    <Link to="/wines/">The Wines</Link>
    <Link to="/grapes/">The Grapes</Link>
  </Layout>
)

export default SecondPage
