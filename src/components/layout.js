/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <div>
        <main>{children}</main>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Made with{" "}
              <span role="img" aria-label="love">
                💚
              </span>{" "}
              by <a href="mailto:hello@adamdscott.com">Adam Scott</a> in
              Guilford, CT.{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSczJTucc8bP9SlxUwkV2aArWCI3onBUuEiZgGzQaQfzHjyYBQ/viewform?usp=sf_link">
                Submit a business
              </a>{" "}
              or{" "}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJfT7yRTCVfI2GoYXwWD6yz0d8ZmFzRJz5hKh7TT6Y3BH-1g/viewform?usp=sf_link">
                submit a correction
              </a>
              .
            </p>
            <p>
              For a list of area businesses offering gift cards, check out{" "}
              <a href="https://www.thegiftcardproject.com/">
                The Gift Card Project
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
