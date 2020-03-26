import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link className="navbar-item" to="/">
          <span role="img" aria-label="Guilford Love">
            💚
          </span>
        </Link>
      </div>
    </div>

    <div id="nav-content" className="navbar-menu">
      <div className="navbar-start">{/* Placeholder for standard nav */}</div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a
              className="button is-success"
              href="https://docs.google.com/forms/d/e/1FAIpQLSczJTucc8bP9SlxUwkV2aArWCI3onBUuEiZgGzQaQfzHjyYBQ/viewform?usp=sf_link"
            >
              <strong>Submit a Business</strong>
            </a>
            <a
              className="button is-light"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfJfT7yRTCVfI2GoYXwWD6yz0d8ZmFzRJz5hKh7TT6Y3BH-1g/viewform?usp=sf_link"
            >
              <strong>Submit a Correction</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav
