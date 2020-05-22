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
        <PostLink
        to={node.fields.slug}>
          <Post key={node.id}>
            <Image imageUrl={node.frontmatter.thumbnail}/>
            <Text>
              <h4>{node.frontmatter.title}</h4>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </Text>
          </Post>
        </PostLink> 
        ))
        }
        </ul>
      </Wrap>
    </Layout>
  )
};

const Wrap = styled.div`
  padding-bottom: 100px;
  & ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const PostLink = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  width: 33.3%;
  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Post = styled.li`
  padding: 20px 15px;
  margin: 10px 0;
  & p{
    line-height: 1.5;
  }
`;

const Text = styled.div`
  padding: 10px;
  & h4{
    font-size: 28px;
    font-weight: 700;
    padding: 15px 0 10px 0;
  }
  & span{
    font-size: 16px;
    margin-bottom: 15px;
    font-weight: 500;
    display: inline-block;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 200px;
  background: ${props=>props.imageUrl ? `url(${props.imageUrl})` : `url(/blog_thumbnail.jpg)`};
  background-size: cover;
  background-position: center center;
`;

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            date
            title
            thumbnail
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