import React from "react"
import Layout from "./layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import Header from '../components/header';
import Button from '../pages/works';
import { Helmet } from 'react-helmet'

export default function BlogPost({data}) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:description" content={post.excerpt}/>
     </Helmet>
      <H2>{post.frontmatter.title}</H2>
      <Date>{post.frontmatter.date}</Date>
      <Content className="center" dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

const H2 = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  padding: 100px 0 50px 0;
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
  line-height: 1.8;
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