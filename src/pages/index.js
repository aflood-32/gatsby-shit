import React from "react"
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue
`

export default ({ data: { allMarkdownRemark } }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Meshanya thoughts</h1>
      <h4>{allMarkdownRemark.totalCount}</h4>
      {allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              <span>
                {node.frontmatter.title} - {node.frontmatter.date}
            </span>
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          fields{
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`
