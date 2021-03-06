import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Box, Flex, Text, Image } from 'rebass/styled-components'
import IB from '../../assets/svg/IB.svg'
import coverImg from '../../assets/img/letsBuildTechnologyThatShouldExistPoster.jpg';

const StyledHeader = styled(Flex)`
  width:100%;
  height: 80px;
  padding:0.5em 2.5em;
  text-align:right;
  top:0;
  left:0;
  z-index: 710;
  display: flex;
  
  background-image:url(${coverImg});
  background-position:0% 13%;
  background-size: cover;
  
  a {
    color: white;
  }
  
  ul {
    padding: 0px;
  }
  
  transition: transform ${(props) => props.theme.animation.default};
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & .logo {
    border:0;
    display:inline-block;
    position:relative;
    width: 50px;
  }

  & .MobileButton {
    & svg {
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    
    & .line {
      fill:none;
      stroke:#fff;
      stroke-width:5.5;
      stroke-linecap:round;
    }

    & svg .top {
      stroke-dasharray: 40 130;
    }
    & svg .middle {
      stroke-dasharray: 40 140;
    }
    & svg .bottom {
      stroke-dasharray: 40 205;
    }
  }
`

const StyledHeaderNav = styled.nav`
  display: inline-block;
  margin-right:1em;
  
  & ul {
    margin-top: 1em;
  }

  & li {
    list-style-type:none;
    display:inline-block;
    margin-right:2.25em;

    & a {
      color: white;
      text-decoration:none;
      border:0;
      position:relative;
      display:block;

      & span {
        display:none;
      }
  
      &:after {
        content:'';
        width:100%;
        padding:1.25em;
        display:block;
        position:absolute;
        top: 0;
        left: 0;
        background:${(props) => props.theme.colors.muted};
        border:1px solid ${(props) => props.theme.colors.black};
        transform-origin: 0 50%;
        transform: translate(-1.25em, -0.75em) scaleX(0);
        z-index: -1;
        transition:transform 300ms ease-out;
      }

      &:hover:after {
        transform: translate(-1.25em, -0.75em) scaleX(1);
      }
     }
   }

  ${props => props.mobile && `
    transform:translateX(${props.visible ? '0' : '-120%'});
    position:fixed;
    width:100%;
    height:100vh;
    top:4.9em;
    border-top:1px solid black;
    left:0;
    z-index:420;
    background:white;

    transition:transform 300ms ease-in;

    & ul { 
      width:100%;
      margin:0;
      padding:0;
    }

    & li { 
      width:100%;
      display:block;
      border-bottom:1px solid black;
      
      &.toggle {
        display: flex;
        justify-content: flex-end;
        
        & span {
          padding: 4em 1em;
          text-align: right;
        }
      }
      & a {
        color: black;
        padding:4em 1em;
        transition:color 300ms ease-out;

        & span {
          margin-left:1em;
          display:inline-block;
        }

        // animation streak across the mobile menu
        &:after {
          content:'';
          width:100%;
          padding:4.5em 1em;
          display:block;
          position:absolute;
          top: 0;
          left: 0;
          background:${props.theme.colors.deepBlue};
          border:0;
          transform-origin: 0 50%;
          transform: translate(-1.25em, 0) scaleX(0);
          z-index: -1; 
          transition:transform 300ms ease-out;
        }
        
        &:hover, &:focus {
          color:white;
        }

        &:hover:after, &:focus:after  {
          transform: translate(-1.25em, 0) scaleX(1);
        }
      }
    }
  `}
`

interface Props {
    mobile: boolean,
    visible: boolean,
    toggleVisibility: boolean
}

const Header: React.FC<Props> = ({mobile, visible, toggleVisibility}) => {

  return(
    <StyledHeader justifyContent="space-between">
      <Link to={'/'} className="logo">
          <Image src={IB} />
      </Link>
      <StyledHeaderNav mobile={mobile} visible={visible}>
        <ul>
          <li>
            <Link to={'/work'}>
              <Text variant="label">
                Work
              </Text>
            </Link>
          </li>
          <li>
            <Link to={'/about'}>
              <Text variant="label">
                About
              </Text>
            </Link>
          </li>
        </ul>
      </StyledHeaderNav>

      {mobile &&
        <Box type="button" className="MobileButton" onClick={toggleVisibility}>
          <svg class={visible && 'active'} viewBox="0 0 100 100" width="50">
            <path
              class="line top"
              d="m 70,33 h -40 c -11.092231,0 11.883874,13.496726 -3.420361,12.956839 -0.962502,-2.089471 -2.222071,-3.282996 -4.545687,-3.282996 -2.323616,0 -5.113897,2.622752 -5.113897,7.071068 0,4.448316 2.080609,7.007933 5.555839,7.007933 2.401943,0 2.96769,-1.283974 4.166879,-3.282995 2.209342,0.273823 4.031294,1.642466 5.857227,-0.252538 v -13.005715 16.288404 h 7.653568" />
            <path
              class="line middle"
              d="m 70,50 h -40 c -5.6862,0 -8.534259,5.373483 -8.534259,11.551069 0,7.187738 3.499166,10.922274 13.131984,10.922274 11.021777,0 7.022787,-15.773343 15.531095,-15.773343 3.268142,0 5.177031,-2.159429 5.177031,-6.7 0,-4.540571 -1.766442,-7.33533 -5.087851,-7.326157 -3.321409,0.0092 -5.771288,2.789632 -5.771288,7.326157 0,4.536525 2.478983,6.805271 5.771288,6.7" />
            <path
              class="line bottom"
              d="m 70,67 h -40 c 0,0 -3.680675,0.737051 -3.660714,-3.517857 0.02541,-5.415597 3.391687,-10.357143 10.982142,-10.357143 4.048418,0 17.88928,0.178572 23.482143,0.178572 0,2.563604 2.451177,3.403635 4.642857,3.392857 2.19168,-0.01078 4.373905,-1.369814 4.375,-3.392857 0.0011,-2.023043 -1.924401,-2.589191 -4.553571,-4.107143 -2.62917,-1.517952 -4.196429,-1.799562 -4.196429,-3.660714 0,-1.861153 2.442181,-3.118811 4.196429,-3.035715 1.754248,0.0831 4.375,0.890841 4.375,3.125 2.628634,0 6.160714,0.267857 6.160714,0.267857 l -0.178571,-2.946428 10.178571,0 -10.178571,0 v 6.696428 l 8.928571,0 -8.928571,0 v 7.142858 l 10.178571,0 -10.178571,0" />
          </svg>
        </Box>
      }
    </StyledHeader>
  )

}

export default Header
