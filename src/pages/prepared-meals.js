import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Tags from "../components/tags"

const PreparedMeals = () => {
  const data = useStaticQuery(graphql`
    query prepared {
      allBusinessJson(
        sort: { order: ASC, fields: name }
        filter: {
          categories: { elemMatch: { type: { eq: "Prepared Meals" } } }
        }
      ) {
        edges {
          node {
            website
            phone
            name
            id
            goods
            giftcards
            details
            description
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
      <SEO title="Prepared Meals" />
      <section className="section">
        <Tags />
        <div className="container">
          {data.allBusinessJson.edges.map(({ node }) => (
            <Card id={node.id} data={node} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default PreparedMeals
