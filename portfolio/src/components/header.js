import React from "react"
import styled from "styled-components"

export default function Header({headerText}) {
  return <H2>{headerText}</H2>
}

const H2 = styled.h2`
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  padding: 100px 15px 50px 15px;
  transition: all .2s ease;
  @media only screen and (max-width: 767px) {
    font-size: 48px;
  }
`;