import React from "react"
import Layout from "../components/layout"
import CardGrid from "../components/card-grid"
import Wrapper from "../components/wrapper"
import { useStaticQuery, graphql } from "gatsby"

export default function GrafischPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___title, order: ASC }
        filter: { frontmatter: { type: { eq: "Grafisch" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              availability
              title
              size
              price
              image
              type
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Wrapper>
        <h1>Grafisch</h1>
        <CardGrid data={data}></CardGrid>
      </Wrapper>
    </Layout>
  )
}
