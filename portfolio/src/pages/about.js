import React from "react"
import Layout from "../components/layout"
import Header from '../components/header';
import styled from "styled-components";
import {Button} from './works';

export default function About() {
  return (
    <>
    <Wrap>
      <Header headerText={'ABOUT'}/>
        <div className="center">
          <Content>
            <Profile>
              <div>
              <h3>
              <span>FRONT-END DEVELOPER</span><br/>
                JIIN EUM
              </h3>
              <br/>
              <img src="/profile.png" width="200"/>
              <p>
                <span>LOCATION</span> Seoul, Korea<br/>
                <span>MAIL</span> jiindev@gmail.com
              </p>
              <Button><i className="fab fa-github"/> GITHUB</Button>
              </div>
              
            </Profile>
            <div>
                <AboutSection>
                  <h3>ABOUT ME</h3>
                  <p>
                  디자인을 전공했지만 코딩이 재미있어 개발자의 길을 걷게 되었습니다.<br/>
                  시각디자인에 대한 많은 관심과 애정을 가지고 있으며, UX 직업교육을 이수하여 UX기획자로 일한 경험이 있습니다.<br/>
                  이러한 경험과 능력을 살려 디자이너와 기획자의 시선에서 프로젝트를 바라보고 <br/>원활한 커뮤니케이션을 해낼 자신이 있습니다.<br/>
                  현재 프론트 엔드 직무로 구직중이지만 백엔드에도 큰 관심을 가지고 있으며 <br/>다른 개발자들 앞에서 자신을 풀스택 개발자라고 당당하게 소개할 수 있는 개발자가 되는 것이 현재 목표입니다.<br/>
                  자신에게 부족한 점에 대해 고민하고 끊임없이 발전하는 웹개발자가 되고 싶습니다.
                  </p>
                </AboutSection>
                <Section>
                  <h3>SKILL</h3>
                  <Skill>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>Gatsby.js</li>
                    <li>PHP</li>
                  </ul>
                  </Skill>
                </Section>
                <Section>
                  <h3>WORK HISTORY</h3>
                  <Experience>
                    <li>
                      <div>
                        <Title>폴리큐브 <span>삼성테마 UI 디자이너</span></Title>
                        <Date>2016. 10 - 2016. 12</Date>
                      </div>
                      <p>
                        예술의 전당 위대한 낙서전 전시 런쳐 테마 6종 제작 <a href="https://news.samsung.com/kr/?p=315505" target="blank">자세히 보기</a>
                        <br/>그 외 20종 삼성테마 디자인 작업
                      </p>
                    </li>
                    <li>
                      <div>
                        <Title>리얼웨이브 <span>전략기획그룹 / 주임</span></Title>
                        <Date>2018. 9 - 2019. 1</Date>
                      </div>
                      <p>
                        포스코 MES 3.0 차세대 생산관제시스템 구축프로젝트<br/>
                        UX 컨설팅 및 기획 (기획표준정의서 작성 및 공통기능 정의, 그 외 UX기획문서 작성 업무)
                      </p>
                    </li>
                  </Experience>
                </Section>
                <Section>
                  <h3>EDUCATION</h3>
                  <Experience>
                    <li>
                      <div>
                        <Title>성신여자대학교 <span>졸업</span></Title>
                        <Date>2013. 3 - 2018. 2</Date>
                      </div>
                      <p>
                        성신여자대학교 산업디자인과 시각미디어디자인 전공<br/>
                        IT학부 정보미디어 부전공
                      </p>                           
                    </li>
                    <li>
                      <div>
                        <Title>스마트기기 사용자경험(UX) 전문가 과정 <span>수료</span></Title>
                        <Date>2016. 8 - 2017. 2</Date>
                      </div>
                      <p>한국인터넷전문가협회에서 주관한 스마트기기 사용자경험(UX) 기획 및 설계 전문가 양성 국비교육 과정 수료</p>
                    </li>
                    <li>
                      <div>
                        <Title>웹퍼블리셔/프론트앤드 개발자 과정 <span>수료</span></Title>
                        <Date>2018. 1 - 2018. 6</Date>
                      </div>
                      <p>그린컴퓨터아카데미에서 주관한 웹퍼블리셔/프론트앤드 개발자(Frontend, PHP) 국비교육 과정 수료</p>
                    </li>
                    <li>
                      <div>
                        <Title>자바(JAVA)프로그래밍 <span>수강</span></Title>
                        <Date>2018. 12 - 2019. 1</Date>
                      </div>
                      <p>
                        더조은컴퓨터학원에서 주관한 자바(JAVA)프로그래밍(초급), 자바(JAVA&amp;JSP)프로그래밍(중급) 과정 수강
                      </p>
                    </li>
                    <li>
                      <div>
                        <Title>정보처리기사 <span>자격증 취득</span></Title>
                        <Date>2019. 8</Date>
                      </div>
                      <p></p>
                    </li>
                  </Experience>
                </Section>
                <Section>
                  <h3>AWARD</h3>
                  <Experience>
                  <li>
                      <div>
                        <Title>라이나생명 <span>대학생 아이디어 공모전 대상</span></Title>
                        <Date>2014. 12</Date>
                      </div>
                      <p>라이나생명 대학생 아이디어 공모전 'THE 건강한 가족, THE 건강한 사회'. 2인 팀작업으로 ‘행복은 이어집니다’ 영상작품을 제출. 대상 수상 <a href="https://www.youtube.com/watch?v=VhGKu-gyzAk" target="blank">자세히 보기</a></p>
                    </li>
                    <li>
                      <div>
                        <Title>iCOOP 생협 <span>공모전 UCC 부문 최우수상</span></Title>
                        <Date>2015. 2</Date>
                      </div>
                      <p>iCOOP 생협에서 진행한 소중한 우리 농업 지키기 공모전. 애니메이션 영상 작업으로 UCC 부문 최우수상 수상</p>
                    </li>
                    <li>
                      <div>
                        <Title>한국인터넷전문가협회 <span>UX 시상식 최우수상</span></Title>
                        <Date>2017. 2</Date>
                      </div>
                      <p>4인 팀작업으로 ‘Coinstage’ 오락 서비스 기획 및 UX/UI디자인 작품 제출. 최우수상 수상</p>
                    </li>
                  </Experience>
                </Section>
            </div>
          </Content>
          </div>
      </Wrap>
    </>
  )
}

const Section = styled.section`
  padding: 0 30px 50px 30px;
  box-sizing: border-box;
  & h3{
    font-size: 27px;
    font-weight: 700;
    padding: 0 0 20px 0; 
  }
  & p{
    line-height: 1.5;
  }
  & a{
    font-weight: 700;
    color: black;
  }
`;

const AboutSection = styled(Section)`
  @media only screen and (max-width: 1000px) {
    & p br{
      display: none;
    }
  }
`;

const Wrap = styled.div`
  padding-bottom: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  & p{
    line-height: 1.5;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Profile = styled.div`
  width: 300px;
  min-width: 300px;
  padding: 0 30px 30px 30px;
  box-sizing: border-box;
  &>div{
    position: sticky;
    top: 68px;
  }
  & h3{
    font-weight: 700;
    font-size: 27px;
    & span{
      font-size: 14px;
      font-weight: 500;
      display: inline-block;
      line-height: 1.5;
    }
  }
  & img{
    margin-bottom: 10px;
  }
  & p{
    & span{
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
    border: none;
    &>div{
      position: static;
      top: 0;
    }
    & img{
      margin-bottom: 30px;
      width: 300px;
      height: 300px;
    }
  }
`;

const Skill = styled.div`
  & ul{
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
  }
  & li{
    margin-right: 15px;
    margin-bottom: 20px;
    background: lightgrey;
    padding: 8px 12px;
    font-size: 14px;
  }
`;

const Experience = styled.ul`
  & li{
    border-bottom: 1px solid rgba(0,0,0,.2);
    padding: 30px 0;
    & div{
      padding: 0 0 10px 0;
    }
    &:last-child{
      border: none;
    }
  }
`;

const Date = styled.span`
  font-size: 16px;
  font-weight: 300;
  margin-left: 10px;
  vertical-align: middle;
  @media only screen and (max-width: 767px) {
    display: block;
    margin-left: 0;
    margin-top: 5px;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  & span{
    font-weight: 400;
  }
`;