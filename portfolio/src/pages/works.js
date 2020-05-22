import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Header from '../components/header';
import worksData from "../data/works.yaml"

export default function Works() {
  return (
    <Layout>
      <Header headerText={'WORKS'}/>
      <Wrap>
        {worksData.map((v, i)=>{
            return (
                <Work key={i}>
                    <div className="center">
                    <Image link={v.imgLink}></Image>
                            <div className="description">
                                <h4>{v.title}</h4>
                                <Date>{v.date}</Date>
                                <p>{v.description}</p>
                                <ul>
                                {
                                    v.skills.map((skill, skillKey)=>{
                                        return <li key={skillKey}>{skill}</li>
                                    })
                                }
                                </ul>
                                <div>
                                    {v.siteUrl && <a href={v.siteUrl} target="blank"><Button>사이트 바로가기</Button></a>}
                                    {v.githubUrl && <a href={v.githubUrl} target="blank"><Button><i className="fab fa-github"/> GITHUB 바로가기</Button></a>}
                                </div>
                            </div>
                        
                    </div>
                </Work>
            )
        })}
      </Wrap>
      
      
    </Layout>
  )
}

const Wrap = styled.div``
const Image = styled.div`
    background: ${props=>`url(${props.link})`};
    height: 500px;
       flex: 1;
       background-size: contain;
       background-position: center center;
       background-repeat: no-repeat;
       margin: 0 30px;
       @media only screen and (max-width: 720px) {
           flex:none;
           height: 300px;
       }
`;

const Work = styled.div`
   width: 100%;
   padding: 30px 0;
   &>div{
       display: flex;
       flex-direction: row-reverse;
   }
   & .img{
       
   }
   & .description{
       flex: 1;
       line-height: 1.5;
       padding: 0 30px;
   }
   & h4{
       font-size: 36px;
       font-weight: 700;
       
   }
   & ul{
       padding: 30px 0;
       font-weight: 600;
       & li{
           &:before{
               width: 10px;
               height: 3px;
               content: '';
               display: inline-block;
               background: black;
               vertical-align: middle;
               margin-right: 10px;
           }
       }
   }
   @media only screen and (max-width: 720px) {
        padding: 10px 0;
        &>div{
            flex-direction: column;
        }
        & .description{
            flex: 3;
            line-height: 1.5;
            padding: 0 30px 30px 30px;
        }
        & p{
            & br{
                display: none;
            }
        }
        & h4{
            font-size: 24px;
        }
        & .img{
            flex: none;
        }
   }
`;

export const Button = styled.button`
    border: 3px solid black;
    outline: none;
    padding: 10px 30px;
    font-size: 14px;
    margin-top: 10px;
    font-family: 'Montserrat', 'Noto Sans KR',san-serif;
    transition: all .2s ease;
    cursor: pointer;
    background-color: transparent;
    margin-right: 10px;
    & a{
      color: black;
      text-decoration: none;
    }
    &:hover{
      padding: 10px 50px;
      background-color: black;
      color: white;
      font-weight: 900;
      & a{
        color: white;
      }
    }
`;

const Date = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
`;