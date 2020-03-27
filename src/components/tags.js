import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Tags = () => {
  const data = useStaticQuery(graphql`
    query tags {
      allBusinessJson(sort: { order: ASC, fields: name }) {
        distinct(field: categories___type)
      }
    }
  `)
  return (
    <div class="tags is-centered">
      <span class="tag is-medium">
        <Link to="/">All</Link>
      </span>
      {data.allBusinessJson.distinct.map((data, index) => (
        <span id={index} class="tag is-medium">
          <Link
            to={`/${String(data)
              .replace(/\s/g, "-")
              .toLowerCase()}/`}
          >
            {data}
          </Link>
        </span>
      ))}
    </div>
  )
}

export default Tags
