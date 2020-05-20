import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled, {keyframes} from "styled-components"
import Layout from "../components/layout"

export default function Home() {
    return (
       <>
       <Layout>
         <Nav>
          <LOGO>JIIN,<br/>DEV</LOGO>
          <ul>
            <li><StyledLink to="about">ABOUT</StyledLink></li>
            <li>WORKS</li>
            <li>BLOG</li>
          </ul>
         </Nav>
         <Header>
           <Illust>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
              <path className="face" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="M126.012 68.925S34.104 168.347 58.96 251.584s123.699 136.994 191.329 90.751 91.329-127.746 73.41-215.607" />
              <path className="lines" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="M329.278 191.484s51.133-12.002 32.572 39.29c-14.876 41.108-45.701 27.654-45.701 27.654M61.506 178.596s-29.714-15.452-36.072 14.606 10.405 53.757 33.526 58.382M200 218.058s-16.185 12.139-13.295 14.451c2.89 2.312 15.607 10.405 15.607 10.405M171.676 279.908s-5.78 13.295 0 19.653M224.5 287v17M170.392 289.734S203.757 276.41 225 295.5M127.168 130.775s19.075-8.092 50.289 9.827M231.214 144.069s20.809-10.983 43.931 6.936" />
              <path className="hair" fill="none" stroke="#000" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="M225 44.647S135.26 90.89 116.763 94.358s97.688-61.85 97.688-61.85-46.821-1.155-76.301 23.122M235.838 34.821s54.335 13.295 86.705 79.191c0 0-67.052-46.243-77.457-60.694M78.815 358.31s-14.738-49.867-8.533-68.986c0 0 14.218 59.525 21.218 62.416V317l16.518 32.428M320.117 264.099s11.473 75.456 4.537 88.751c0 0-10.4-50.664-16.183-64.638 0 0 2.888 53.656-2.314 64.638l-10.983-31.792-5.202 27.746M327.269 148.248s23.02-15.739 46.141-11.115c0 0-36.186 9.9-40.462 17.341 0 0 32.37-1.734 43.353 0l-36.257 8.671 29.32 24.277" />
              <path className="glasses" fill="none" stroke="#000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="M117.919 155.052s36.416-10.983 59.538-4.046c0 0 36.416 66.262-21.965 76.195 0 0-55.436 5.886-40.724-54.807M225 158.52s46.098-4.624 68.064 10.405c0 0 16.763 69.364-37.572 65.318-54.335-4.046-39.306-66.474-39.306-66.474M188.676 188.032s4.671-8.06 25.627 0" />
              <circle cx="150.991" cy="179.537" r="4.912" />
              <circle cx="240.991" cy="186.537" r="4.912" /></svg>
           </Illust>
           <h1>JIIN, DEVELOPER</h1>
           <p>그림 그리는 것을 좋아하여 디자인을 전공했던 스무살.<br/>우연히 접하게 된 코딩에 흥미를 느껴 공부를 시작했고, 스물일곱인 지금은 개발자가 되고자 합니다.
           <br/>소통에 능한 개발자, 사용자 친화적인 웹을 만드는 개발자가 되고 싶습니다.
           </p>
         </Header>
        </Layout>
       </>
      );
  }

  const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
  `;

  const Nav = styled.nav`
    padding: 15px 30px;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
    & p{
      display: inline;
    }
    & ul{
      float: right;
      margin-right: 10px;
    }
    & li{
      float: left;
      font-weight: 700;
      transition: all .2s ease;
      padding: 0px 20px;
    }
  `;
  const LOGO = styled.span`
    font-size: 24px;
    text-align: left;
    font-weight: 900;
  `;
  const Header = styled.header`
    height: 100vh;
    & h1{
      font-size: 80px;
      font-weight: 900;
      text-align: center;
    }
    & p{
      margin-top: 40px;
      text-align: center;
      font-weight: 400;
      line-height: 1.5;
    }
  `;
  const dashAni = keyframes`
    from{stroke-dashoffset: 700;}
    to{stroke-dashoffset: 0;}
  `;

  const Illust = styled.span`
    width: 300px;
    height: 300px;
    display: block;
    margin: 50px auto;
    & svg{
      width: 100%;
      height: 100%;
    }
    & .glasses{
      animation-delay: 3s;
    }
    & .face{
      animation-delay: 0;
    }
    & .lines{
      animation-delay: 4s;
    }
    & .hair{
      animation-delay: 5s;
    }
        path {
            animation-name: ${dashAni};
            animation-fill-mode: forwards;
            stroke-dasharray: 700;
            stroke-dashoffset: 700;
            animation-duration: 3s;
            
        }
  `;