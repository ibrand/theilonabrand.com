import * as React from 'react';
import styled from "styled-components"
import { Box, Heading } from 'rebass/styled-components'
import coverImg from '../../assets/img/letsBuildTechnologyThatShouldExistPoster.jpg';

interface IGreetingMastheadProps {
  className: string
}

const GreetingMasthead: React.FunctionComponent<IGreetingMastheadProps> = ({className}) => {
  return(
  <section className={className}>
    <Box mb={4} pb={[2, 2, 4]}>
      <Heading
        fontSize={[4, 5, 7]} textAlign="left">
        Ilona builds technology that should exist
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="header" textAlign="left" fontSize={[4, 5, 6]}>Current roles</Heading>
      <Heading
        fontSize={[2, 4, 5]} textAlign="left" variant="header">
        Community Manager of <a href={"https://github.com/MoveOnOrg/Spoke"}>Spoke</a> with MoveOn.org <br />
        Director of <a href={"https://progressivehacknight.org/"}>Progressive HackNight</a> <br/>
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="header" textAlign="left" fontSize={[3, 4]} mb={2}>Based in</Heading>
        <Heading
          fontSize={[3, 3, 5]} textAlign="left" variant="header">
          New york city
      </Heading>
    </Box>
  </section>
  )
};

// font-family: ${(props) => props.theme.fonts.heading};
const StyledGreetingMasthead = styled(GreetingMasthead)`
  padding:4rem;
  color: white;
  border-bottom:1px solid ${(props) => props.theme.colors.black};
  height:93vh;
  box-sizing: border-box;

  background-image:url(${coverImg});
  background-repeat:no-repeat;
  background-size:100%;
  background-position:0% 46%;
  background-size: cover;
  
  a {
    color: white;
    border-bottom: 1px solid white;
  }
  
  ${(props) => props.theme.mediaQueries.mobile} {
    padding:2.5rem;
  }
`
//   ${(props) => props.theme.mediaQueries.computer} { }
export default StyledGreetingMasthead;
