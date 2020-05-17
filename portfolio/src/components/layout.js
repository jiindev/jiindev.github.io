import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
@font-face {
     font-family: 'Inter';
     src: url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
  }
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
    background-color: white;
`;