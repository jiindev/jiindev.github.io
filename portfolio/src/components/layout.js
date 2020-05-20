import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
body {
    font-size: 14px;
    font-family: 'Montserrat', 'Noto Sans KR',san-serif;
  }
`
export default function Layout({ children }) {
  return (
    <Frame>
        <GlobalStyle theme="purple" />
      {children}
    </Frame>
  )
};

const Frame = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    border: 5px solid;
`;