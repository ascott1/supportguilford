import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Nav from "./nav"

const Header = ({ siteTitle, siteDescription }) => (
  <>
    <Nav />
    <section className="hero is-success is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{siteTitle}</h1>
          <h2 className="subtitle">{siteDescription}</h2>
        </div>
      </div>
    </section>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
