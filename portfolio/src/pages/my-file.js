import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link as GatsbyLink } from "gatsby"
export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <GatsbyLink
              to={node.fields.slug}>
            <h3
            >
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
            </GatsbyLink>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}) {
      totalCount
      edges {
        node {
          frontmatter {
            date
            title
          }
          fields {
            slug
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`