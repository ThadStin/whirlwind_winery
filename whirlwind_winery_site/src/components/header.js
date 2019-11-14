import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `maroon`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

    {/*add nav to Header*/}
    {/*********************************************************/}
      <div> {/*style={{ marginLeft: `5rem`}}  this can be added to div if want*/}
        <Link to="/page-2/" style={{ margin: `1rem`, }}>The Winery</Link>
        <Link to="/wines/" style={{ margin: `1rem` }}> The Wines </Link>
        <Link to="/grapes/" style={{ margin: `1rem` }}>The Grapes</Link>
      </div>
    {/*********************************************************/}

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
