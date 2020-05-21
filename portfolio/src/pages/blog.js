import React from "react"
import Layout from "../components/layout"
import styled from "styled-components";
import Header from '../components/header';
import {graphql} from 'gatsby';
import { Link as GatsbyLink } from "gatsby"

export default function Blog({data}) {
  return (
    <Layout>
      <Header headerText={'BLOG'}/>
      <Wrap>
        <ul className="center">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <StyledLink
        to={node.fields.slug}>
          <Post key={node.id}>
            <div>
            <H4>{node.frontmatter.title} <span>{node.frontmatter.date}</span></H4>
            <p>{node.excerpt}</p>
            </div>
          </Post>
        </StyledLink> 
        ))
        }
        </ul>
      </Wrap>
    </Layout>
  )
};

const Wrap = styled.div`
  padding-bottom: 100px;
`;

const H4 = styled.h3`
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 30px;
  & span{
    font-size: 16px;
    margin-left: 5px;
    font-weight: 500;
    vertical-align: bottom;
  }
`;

const StyledLink = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
`;

const Post = styled.li`
  display: flex;
  padding: 30px;
  margin: 10px 0;
  & p{
    line-height: 1.5;
  }
`;

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