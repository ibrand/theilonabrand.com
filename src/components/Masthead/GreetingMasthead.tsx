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
      <Heading variant="header" textAlign="left" fontSize={[4, 5, 6]}>Current role:</Heading>
      <Heading
        fontSize={[2, 4, 5]} textAlign="left" variant="header">
        Software Engineer at <a href={"http://front.moveon.org/"}>MoveOn.org</a>
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="header" textAlign="left" fontSize={[3, 4]} mb={2}>Based in</Heading>
        <Heading
          fontSize={[3, 3, 5]} textAlign="left" variant="header">
          Minneapolis
      </Heading>
    </Box>
  </section>
  )
};

const StyledGreetingMasthead = styled(GreetingMasthead)`
  color: white;
  border-bottom:1px solid ${(props) => props.theme.colors.black};
  min-height: calc(100vh - 80px); // fullscreen minus the footer height
  margin-top: -80px; // to give a seamless header
  box-sizing: border-box;

  background-image:url(${coverImg});
  background-repeat:no-repeat;
  background-size:100%;
  background-position:0% 53%;
  background-size: cover;
  
  a {
    color: white;
    border-bottom: 1px solid white;
  }
  
  ${(props) => props.theme.mediaQueries.mobile} {
    padding: 6em 2.5em 2.5em 2.5em;
  }
`
export default StyledGreetingMasthead;
