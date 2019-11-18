import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>contact page</h1>

      <form method="post" action="#">
        <label>
          Name:
          <input type="text" name="name" id="name" />
        </label> <br/>
         <label>
          Email:
          <input type="email" name="email" id="email" />
        </label> <br/>
        <label>
          Subject:
          <input type="text" name="subject" id="subject" />
        </label> <br/>
        <label>
          Message:
          <textarea name="message" id="message" rows="5" />
        </label> <br/>
        <input type="reset" value="Clear" />
        <button type="submit">Send</button>

      </form>

  </Layout>
)

export default Contact
