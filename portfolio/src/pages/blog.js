import React from "react"
import Layout from "../components/layout"
import styled from "styled-components";
import Header from '../components/header';
import {graphql} from 'gatsby';

export default function Blog() {
  return (
    <Layout>
      <Header headerText={'BLOG'}/>
    </Layout>
  )
};