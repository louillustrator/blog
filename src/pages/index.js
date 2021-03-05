import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
// import Image from "../components/image"
// import SEO from "../components/seo"

import { Link, graphql } from "gatsby"

const BlogList = styled.li`
  text-align: centre;
`

const BlogTitle = styled.h4`
  color: blue;
  display: inline-block;
  color: #eb9486;
  font-size: 21px;
`

const Blogdate = styled.h3`
  display: inline-block;
  color: #56667a;
  font-size: 12px;
  margin-left: 10px;
  /* padding-left: 38px; */
`

const BlogSectionHeader = styled.h4`
  font-size: 26px;
  color: #56667a;
  margin-bottom: 0px;
  margin-top: 5px;
`

//  Function to create a list of <h2> elements with Post title

function getPosts(data) {
  let posts = []
  let postsList = data.allMarkdownRemark.edges
  postsList.forEach((element, key) => {
    let date = element.node.frontmatter.date
    let slug = element.node.frontmatter.slug
    let title = element.node.frontmatter.slug
    posts.push(
      <BlogList key={key}>
        <Link to={`/${slug}`}>
          <BlogTitle>{title}</BlogTitle>
        </Link>

        <Blogdate>{`(${date})`}</Blogdate>
      </BlogList>
    )
  })

  return posts
}

// =========== This is a stateless React component ===============
// The data passed into the components is from the result after executing
// the GraphQL Query below it.
const IndexPage = ({ data }) => (
  <Layout>
    <BlogSectionHeader>Posts</BlogSectionHeader>
    {getPosts(data)}
  </Layout>
)

export default IndexPage

// =========== This is the GraphQL query =======================
// The data obtained the from the below GraphQL query will be
// passed into the React component above
export const postsQuery = graphql`
  query postsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "DD MMMM, YY")
          }
        }
      }
    }
  }
`
