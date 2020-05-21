import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Header from '../components/header';

export default function Works() {
  return (
    <Layout>
      <Header headerText={'WORKS'}/>
      <Work>
          <div className="center">
                <div className="description">
                    <h4>DREAMWITCH <span>2020. 04 - 2020. 05</span></h4>
                    <p>투두리스트 SNS 웹서비스를 공동기획 및 풀스택 개발했습니다. <br/>그날 하루동안의 해야 할 일을 기록하고, <br/>12시가 가기 전에 미션을 성공하면 보상을 줌으로써 사용자에게 동기부여를 줍니다. <br/>모은 화폐로는 아바타를 커스터마이징 할 수 있으며, <br/>다른 사용자의 페이지에 방문하여 덧글을 남김으로써 소통할 수 있습니다. <br/>AWS에서 EC2서비스를 이용하여 배포하였습니다.</p>
                    <ul>
                        <li>REACT (REACT HOOKS)</li>
                        <li>REDUX &amp; REDUX-SAGA</li>
                        <li>NEXT.js</li>
                        <li>Express.js</li>
                        <li>STYLED COMPONENT</li>
                        <li>서버사이드 렌더링</li>
                        <li>AWS 배포</li>
                    </ul>
                    <div>
                        <a href="http://dreamwitch.kr/" target="blank"><Button>사이트 바로가기</Button></a>
                        <a href="https://github.com/jiindev/DREAMWITCH" target="blank"><Button><i class="fab fa-github"/> GITHUB 바로가기</Button></a>
                </div>
            </div>
            <div className="img"></div>
          </div>
      </Work>
      <Work>
          <div className="center">
                <div className="description">
                    <h4>마리의 할로윈 파티 <span>2019. 9 - 2019. 10</span></h4>
                    <p>카툰타투 텀블벅 판매에서 이벤트로 진행한 스낵게임 웹사이트를 공동기획 및 개발했습니다. <br/>별도의 라이브러리 없이 순수 자바스크립트 만으로 개발하였으며 <br/>카드 뒤집기와 지뢰찾기 기본 동작 원리는 강의를 참고하여 진행하였고 <br/>추가로 스테이지, 게임 클리어, 팝업 등의 기능을 커스텀하였습니다. <br/>모든 미니게임을 클리어하면 특별한 엔딩을 확인할 수 있습니다.</p>
                    <ul>
                        <li>VANILA JS</li>
                        <li>RESPONSIVE WEB</li>
                    </ul>
                    <div>
                        <a href="http://cartoontattoo.cafe24.com/halloween/" target="blank"><Button>사이트 바로가기</Button></a>
                        <a href="https://github.com/jiindev/CTTT_halloween" target="blank"><Button><i class="fab fa-github"/> GITHUB 바로가기</Button></a>
                </div>
            </div>
            <div className="img"></div>
          </div>
      </Work>
      <Work>
          <div className="center">
                <div className="description">
                    <h4>JIIN, DEV <span>2020. 05</span></h4>
                    <p>포트폴리오용 개인 사이트를 디자인 및 개발하였습니다.<br/>
                    
                    </p>
                    <ul>
                        <li>REACT GATSBY.js</li>
                        <li>GRAPHQL</li>
                        <li>STYLED COMPONENT</li>
                    </ul>
                    <div>
                        <a href="https://jiindev.github.io/" target="blank"><Button>사이트 바로가기</Button></a>
                        <a href="https://github.com/jiindev/jiindev.github.io" target="blank"><Button><i class="fab fa-github"/> GITHUB 바로가기</Button></a>
                </div>
            </div>
            <div className="img"></div>
          </div>
      </Work>
      <Work>
          <div className="center">
                <div className="description">
                    <h4>I AM A MEDIA ARTIST <span>2018</span></h4>
                    <p>
                    시민청에서 진행한 프로젝트 '아임 어 미디어 아티스트'의 웹사이트를 개발하였습니다.<br/>
                    시민들이 직접 미디어아티스트와 소통하며 작품을 만들어 보는 프로젝트로,<br/>
                    웹 페이지에는 작가들의 작업과 시민들의 작업, 워크샵 내용을 아카이빙하였습니다.<br/>                    
                    </p>
                    <ul>
                        <li>JQUERY</li>
                        <li>RESPONSIVE WEB</li>
                    </ul>
                    <div>
                        <a href="http://aliceon.net/iam/" target="blank"><Button>사이트 바로가기</Button></a>
                        <a href="https://github.com/Studiojiji/I-AM-A-MEDIA-ARTIST" target="blank"><Button><i class="fab fa-github"/> GITHUB 바로가기</Button></a>
                </div>
            </div>
            <div className="img"></div>
          </div>
      </Work>
      <Work>
          <div className="center">
                <div className="description">
                    <h4>THE PERFORM <span>2018</span></h4>
                    <p>
                    미디어아트 웹진 더퍼폼 사이트 개발 업무를 맡았습니다.<br/>
                    기획과 디자인 컨셉 도출에 참여하였으며 이후 풀스택 개발을 했습니다.<br/>
                    현재 실제로는 사용되지 않고 있지만 사용자페이지, 관리페이지로 <br/>나뉘어진 완전한 하나의 사이트를 제작해볼 수 있는 좋은 기회였고 <br/>이 프로젝트를 통해서 코드이그나이터와 mvc패턴을 이해하고 익힐 수 있었습니다.<br/>                    
                    </p>
                    <ul>
                        <li>PHP</li>
                        <li>CODEIGNITER</li>
                        <li>RESPONSIVE WEB</li>
                    </ul>
                    <div>
                        <a href="http://aliceon.net/iam/" target="blank"><Button>사이트 바로가기</Button></a>
                        <a href="https://github.com/Studiojiji/I-AM-A-MEDIA-ARTIST" target="blank"><Button><i class="fab fa-github"/> GITHUB 바로가기</Button></a>
                </div>
            </div>
            <div className="img"></div>
          </div>
      </Work>
    </Layout>
  )
}

const Work = styled.div`
   width: 100%;
   padding: 30px 0;
   &>div{
       display: flex;
       flex-direction: row;
   }
   & .img{
       height: 500px;
       flex: 2;
   }
   & .description{
       flex: 3;
       line-height: 1.5;
       padding: 0 30px;
   }
   & h4{
       font-size: 36px;
       font-weight: 700;
       padding: 0 0 20px;
       & span{
           font-size: 16px;
           margin-left: 5px;
           font-weight: 500;
       }
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
            height: 300px;
        }
   }
`;

const Button = styled.button`
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