import React from "react"
import styled from "styled-components"

export default function Header({headerText}) {
  return <H2>{headerText}</H2>
}

const H2 = styled.h2`
  font-size: 64px;
  font-weight: 900;
  text-align: center;
  padding: 100px 0;
  @media only screen and (max-width: 720px) {
      font-size: 48px;
  }
`;