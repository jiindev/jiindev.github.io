import React from "react"
import styled, {keyframes} from "styled-components"
import Layout from "../components/layout"
import Typist from 'react-typist';
import 'babel-polyfill';

export default function Home() {
    return (
       <>
       <Layout>
         <Header>
           <div>
              <Illust/>
              <h1>
              <Typist cursor={{show:true}}>
                JIIN,
                <Typist.Delay ms={500}/><br/>&nbsp;DESIGNER
                <Typist.Backspace count={8} delay={1000} />
                <Typist.Delay ms={500}/>DEVELOPER
              </Typist>
              </h1>
              <div>
                <p>디자인 전공을 했다 어쩌고 저쩌고<br/> 코딩에 흥미를 느껴 어쩌고저쩌고 개발공부를 시작
                <br/>소통에 능한 개발자, 사용자 친화적인 웹을 만드는 개발자가 되고 싶습니다.
                </p>
                <a href="https://github.com/jiindev" target="blank"><Button><i class="fab fa-github"/> Github 바로가기</Button></a>
              </div>
           </div>
         </Header>
        </Layout>
       </>
      );
  }

  const TextAni = keyframes`
    from{
      opacity: 0;
      top: 30px;
    }
    to{
      opacity: 1;
      top: 0;
    }
  `;
  
  const Header = styled.header`
    height: 100vh;
    text-align: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & br{
        display: none;
    }
    & h1{
      font-size: 86px;
      font-weight: 900;
      & .Cursor{
        font-weight: 100;
      }
    }
    & div>div{
      animation: ${TextAni} 1s ease-out 4s forwards;
      opacity: 0;
      position: relative;
    }
    & p{
      margin-top: 40px;
      font-weight: 400;
      line-height: 1.5;
      padding: 0 30px;
        & br{
          display: inline;
        }
    }
    
    @media only screen and (max-width: 1024px) {
      & h1{
          font-size: 68px;
        }
    }
    @media only screen and (max-width: 720px) {
        & br{
          display: inline
        }
        & h1{
          font-size: 60px;
          height: 120px;
        }
        & p{
          & br{
            display: none;
          }
        }
    }
    
  `;

  const Illust = styled.span`
    
  `;

  const Button = styled.button`
    border: 3px solid black;
    outline: none;
    padding: 10px 30px;
    font-size: 14px;
    margin-top: 30px;
    font-family: 'Montserrat', 'Noto Sans KR',san-serif;
    transition: all .2s ease;
    cursor: pointer;
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