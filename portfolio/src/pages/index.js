import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

export default function Home() {
    return (
       <>
       <Layout>
         <Nav>
          <LOGO>JIIN,<br/>DEV</LOGO>
          <ul>
            <li><StyledLink to="about">ABOUT</StyledLink></li>
            <li>WORKS</li>
            <li>BLOG</li>
          </ul>
         </Nav>
         <Header>
           <Illust/>
           <h1></h1>
         </Header>
        </Layout>
       </>
      );
  }

  const StyledLink = styled(GatsbyLink)`
    color: white;
    text-decoration: none;
  `;

  const Nav = styled.nav`
    padding: 15px 30px;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    color: white;
    z-index: 999;
    & p{
      display: inline;
    }
    & ul{
      float: right;
      margin-right: 10px;
    }
    & li{
      float: left;
      font-weight: 700;
      transition: all .2s ease;
      padding: 0px 20px;
      &:hover{
        font-size: 24px;
      }
    }
  `;
  const LOGO = styled.span`
    font-size: 24px;
    text-align: left;
    font-weight: 900;
  `;
  const Header = styled.header`
    height: 100vh;
    background-color: #451bbf;
    position: relative;
    & h1{
      color: white;
      font-size: 80px;
      font-family: 'Noto Sans KR';
      font-weight: 900;
      position: absolute;
      bottom: 0;
    }
  `;

  const Illust = styled.span`
    width: 800px;
    height: 800px;
    display: block;
    /* background: url('/mainillust.png'); */
    background-size: contain;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -400px;
  `;