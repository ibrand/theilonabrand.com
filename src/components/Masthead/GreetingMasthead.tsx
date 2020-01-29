import * as React from 'react';
import styled from "styled-components"
import { Box, Heading } from 'rebass/styled-components'
import coverImg from '../../assets/img/letsBuildTechnologyThatShouldExistPoster.png';

interface IGreetingMastheadProps {
  className: string
}

const GreetingMasthead: React.FunctionComponent<IGreetingMastheadProps> = ({className}) => {
  return(
  <section className={className}>
    <Box mb={4} pb={"14rem"}>
      <Heading
        fontSize={[4, 5, 7]} textAlign="left">
        Ilona builds technology that should exist
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="label" textAlign="left" fontSize={[2, 3]}>Current roles</Heading>
      <Heading
        fontSize={[2, 3, 5]} textAlign="left">
        Community Manager of <a href={"https://github.com/MoveOnOrg/Spoke"}>Spoke</a> with MoveOn.org <br />
        Director of <a href={"https://progressivehacknight.org/"}>Progressive HackNight</a> <br/>
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="label" textAlign="left" fontSize={[1, 2]} mb={2}>Based in</Heading>
        <Heading
          fontSize={[2,3]} textAlign="left">
          New york city
      </Heading>
    </Box>
  </section>
  )
};

const StyledGreetingMasthead = styled(GreetingMasthead)`
  padding:4rem;
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  border-bottom:1px solid ${(props) => props.theme.colors.black};

  background-image:url(${coverImg});
  background-repeat:no-repeat;
  background-size:100%;
  background-position:0% 46%;
  
  a {
    color: white;
    border-bottom: 1px solid white;
  }
`
//   ${(props) => props.theme.mediaQueries.computer} { }
export default StyledGreetingMasthead;
