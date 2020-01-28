import * as React from 'react';
import styled from "styled-components"
import { Box, Heading } from 'rebass/styled-components'
import coverImg from '../../assets/img/letsBuildTechnologyThatShouldExistPoster.png';

interface IGreetingMastheadProps {
  className: string
}

const StyledBackground = styled.section`
  background-image: url(${coverImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top right;
`

const GreetingMasthead: React.FunctionComponent<IGreetingMastheadProps> = ({className}) => {
  return(
  <section className={className}>
    <Box mb={4}>
      <Heading
        fontSize={[4, 5, 7]} textAlign="left">
        Ilona builds
        technology that
        should exist
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="label" textAlign="left" fontSize={[2, 3]}>roles</Heading>
      <Heading
        fontSize={[2, 3, 5]} textAlign="left">
        full stack software engineer<br />
        community manager <br/>
        project manager
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
  height:auto;
  padding:4rem;
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  border-bottom:1px solid ${(props) => props.theme.colors.black};

  background-image:url(${coverImg});
  background-repeat:no-repeat;
  background-size:100%;
  background-position:0% 40%;
`
//   ${(props) => props.theme.mediaQueries.computer} { }
export default StyledGreetingMasthead;
