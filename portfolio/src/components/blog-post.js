import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

export default function BlogPost({data}) {
  const post = data.markdownRemark;
  return (
    <>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:description" content={post.excerpt}/>
     </Helmet>
      <H2>{post.frontmatter.title}</H2>
      <Date>by jiindev, {post.frontmatter.date}</Date>
      <Content className="center post" dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  )
}

const H2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  padding: 100px 15px 50px 15px;
  transition: all .2s ease;
  @media only screen and (max-width: 767px) {
    font-size: 36px;
  }
`;

const Date = styled.div`
  text-align: center;
  margin: -30px 0 50px 0;
  font-size: 18px;
`;
const Content = styled.div`
  line-height: 2;
  padding: 30px 30px 100px 30px;
  box-sizing: border-box;
  font-size: 16px;
  & h4{
    font-size: 24px;
    font-weight: 700;
    padding: 30px 0 10px;
  }
  & img{
    display: block;
    margin: 30px auto;
    max-width: 100%;
  }
  & a{
    font-weight: 700;
    color: #a0a0a0;
  }
  & strong{
    font-weight: 700;
  }
  & pre{
    background-color: #3a3a3a;
    color: white;
    padding: 10px 30px;
    margin: 15px 0;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 300;
    max-width: 100%;
    box-sizing: border-box;
    line-height: 1.4;
    overflow-x: auto;
  }
  & li{
    list-style: disc;
    margin-left: 15px;
  }
  & iframe{
    max-width: 100%;
  }
`;
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      excerpt
    }
  }
`;