import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import { Helmet } from 'react-helmet';
import Transition from './transition';  
import Navigation from './navigation';

const GlobalStyle = createGlobalStyle`
${reset};
html,body{
  height: 100%;
}
body {
    font-size: 14px;
    font-family: 'Montserrat', 'Noto Sans KR',san-serif;
  }
.center {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
.center.post{
  max-width: 800px;
}
`
export default function Layout ({ children, location }) {
  return (
    <>
    <GlobalStyle/>
    <Helmet>
      <title>JIIN, DEV</title>
      <meta name="description" content="프론트 엔드 개발자 엄지인 포트폴리오 사이트" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700;800&display=swap" rel="stylesheet"></link>
      <link href='http://fonts.googleapis.com/css?family=Noto+Sans' rel='stylesheet' type='text/css'/>
      <meta property="og:description" content="프론트 엔드 개발자 엄지인 포트폴리오 사이트"/>
    </Helmet>
    <Navigation location={location}/>
    <Page>
      <Transition location = {location}>
        {children}
        <Footer>© 2020 gatsby simple-dev-theme by <a href="https://github.com/jiindev" target="blank">jiindev</a></Footer>
      </Transition>
    </Page>
  </>
  )
};

const Page = styled.div`
  position: relative;
`;
const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
  & a{
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
`;