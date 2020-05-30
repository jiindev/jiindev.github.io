import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

export default function Navigation({location}) {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);
  const onClickHamburger = () => {
    setHamburgerToggle(!hamburgerToggle);
  }
  useEffect(() => {
    setHamburgerToggle(false);
  }, [location]);
  
    return (
    <Nav hamburgerToggle={hamburgerToggle}>
        <div className="center">
            <StyledLink to="/"><LOGO>JIIN,<br/>DEV</LOGO></StyledLink>
            <HamburgerButton onClick={onClickHamburger} hamburgerToggle={hamburgerToggle}><span/></HamburgerButton>
            <ul>
            <StyledLink to="/about"><li>ABOUT</li></StyledLink>
            <StyledLink to="/works"><li>WORKS</li></StyledLink>
            <StyledLink to="/blog"><li>BLOG</li></StyledLink>
            </ul>
        </div>
    </Nav>
    )
}

const StyledLink = styled(GatsbyLink)`
    text-decoration: none;
    color: black;
`;
const HamburgerButton = styled.span`
  float: right;
  padding: 5px;
  cursor: pointer;
  margin-right: 15px;
  display: none;
  width: 40px;
  vertical-align: middle;
  & span, &:after, &:before{
    background-color: #000;
    content: '';
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all .2s ease-in-out;
  }
  & span{
    transform: ${props=>props.hamburgerToggle ? 'scale(0)' : 'none'};
  }
  &:after{
    transform: ${props=>props.hamburgerToggle ? 'translateY(-12px) rotate(-135deg)' : 'none'};
  }
  &:before{
    transform: ${props=>props.hamburgerToggle ? 'translateY(12px) rotate(135deg)' : 'none'};
  }
  @media only screen and (max-width: 767px) {
    display: inline-block;
  }
`;
const Nav = styled.nav`
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
    background-color: rgba(255,255,255,.85);
    border-bottom: 1px solid white;
    & ul{
      float: right;
      margin-right: 10px;
      width: auto;
      padding:10px 0;
    }
    & li{
      float: left;
      font-weight: 700;
      transition: all .2s ease;
      padding: 10px 15px;
      margin: 3px 5px 0 5px;
      &:after{
        content: '';
        display: block;
        width: 0%;
        border-bottom: 3px solid;
        margin-top: 5px;
        transition: all .2s ease;
      }
      &:hover:after{
        width: 100%;
      }
    }
    @media only screen and (max-width: 767px) {
      padding-bottom: 0;
      & ul{
        width: 100%;
        padding-bottom: 30px;
        transition: all 1s ease;
        overflow: hidden;
        display: ${props=>props.hamburgerToggle ? 'block' : 'none'};
      }
      & li{
        text-align: center;
        width: 100%;
        margin: 0;
        padding: 30px 15px;
        &:after{
          display: none;
        }
      }
    }
  `;
  const LOGO = styled.span`
    font-size: 24px;
    text-align: left;
    font-weight: 700;
    vertical-align: center;
    padding: 10px 0 10px 15px;
    display: inline-block;
    @media only screen and (max-width: 767px) {
      font-size: 18px;
    }
  `;