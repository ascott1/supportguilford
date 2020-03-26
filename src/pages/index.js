import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Businesses {
      allBusinessJson(sort: { order: ASC, fields: name }) {
        edges {
          node {
            id
            name
            description
            details
            goods
            giftcards
            phone
            website
            categories {
              emoji
              type
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <section className="section">
        <div className="container">
          {data.allBusinessJson.edges.map(({ node }) => (
            <Card id={node.id} data={node} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
