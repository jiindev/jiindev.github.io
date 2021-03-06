import React from "react"
import styled from "styled-components";
import Header from '../components/header';
import {graphql} from 'gatsby';
import { Link as GatsbyLink } from "gatsby"

export default function Blog({data}) {
  return (
    <>
      <Wrap>
      <Header headerText={'BLOG'}/>
        <ul className="center">
      {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id}>
            <PostLink
            to={node.fields.slug}>
              <Image imageUrl={node.frontmatter.thumbnail}/>
              <Text>
                <h4>{node.frontmatter.title}</h4>
                <span>{node.frontmatter.date}</span>
                <p>{node.excerpt}</p>
              </Text>
            </PostLink>
          </Post>
        ))
        }
        </ul>
      </Wrap>
    </>
  )
};

const Wrap = styled.div`
  padding-bottom: 100px;
  background-color: white;
  & ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const PostLink = styled(GatsbyLink)`
  text-decoration: none;
  color: black;
  
`;

const Post = styled.li`
  width: 33.3%;
  padding: 20px 15px;
  margin: 10px 0;
  box-sizing: border-box;
  & p{
    line-height: 1.5;
    display: none;
  }
  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
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