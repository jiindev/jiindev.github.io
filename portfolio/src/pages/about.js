import React from "react"
import Layout from "../components/layout"
import Header from '../components/header';
import styled from "styled-components";

export default function About() {
  return (
    <Layout>
      <Header headerText={'ABOUT'}/>
      <Wrap>
        <div className="center">
          <Section>
            <H3>TEXT</H3>
            <p>
            TEXT
            </p>
          </Section>
          <Section>
            <H3>EDUCATION</H3>
            <ul>
              <li>TEXT</li>
              <li>TEXT</li>
            </ul>
          </Section>
          <Section>
            <H3>ACHIEVEMENT</H3>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
          </Section>
        </div>
      </Wrap>
    </Layout>
  )
}

const Section = styled.section`
  padding: 30px 0;
  & li{
    padding: 30px;
  }
  & p{
    line-height: 1.5;
  }
`;

const H3 = styled.h3`
      font-size: 32px;
      font-weight: 700; 
      text-align: center;
`;

const Wrap = styled.div`
`;