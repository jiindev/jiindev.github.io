import React from "react"
import styled, {keyframes} from "styled-components"
import Typist from 'react-typist';
import 'babel-polyfill';

export default function Home() {
    return (
       <>
         <Wrap>
           <div>
              <h1>
              <Typist cursor={{show:false}}>
                JIIN,
                <Typist.Delay ms={500}/><br/>&nbsp;DESIGNER
                <Typist.Backspace count={6} delay={1000} />
                <Typist.Delay ms={500}/>VELOPER
              </Typist>
              </h1>
              <div>
                <p>디자인을 전공하였지만 디자인보다는 코딩이 재미있어 개발을 시작하게 되었습니다. <br/>디자인 업무와 UX 기획 업무 모두를 경험해보았으며 지속적인 관심을 가지고 있는 커뮤니케이션형 개발자입니다. <br/>부족한 부분을 끊임없이 채워나가는, 사용자 친화적인 웹을 고민하고 만드는 개발자가 되고 싶습니다.
                </p>
                <a href="https://github.com/jiindev" target="blank"><Button><i className="fab fa-github"/> Github 바로가기</Button></a>
              </div>
           </div>
         </Wrap>
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
  
  const Wrap = styled.div`
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
      font-weight: 700;
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
    @media only screen and (max-width: 767px) {
        & br{
          display: inline
        }
        & h1{
          font-size: 48px;
          height: 120px;
        }
        & p{
          margin-top: 10px;
          & br{
            display: none;
          }
        }
    }
    
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
    background-color: white;
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