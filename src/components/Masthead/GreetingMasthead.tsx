import * as React from 'react';
import styled from "styled-components"
import { Box, Heading } from 'rebass/styled-components'
import MastheadSVG from '@assets/svg/masthead-circles.svg'

interface IGreetingMastheadProps {
  className: string
}

const GreetingMasthead: React.FunctionComponent<IGreetingMastheadProps> = ({className}) => {
  return(
  <section className={className}>
    <Box mb={4}>
        <Heading
          fontSize={[3, 4, 7]} textAlign="right">
          Ilona builds technology that should exist
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="label" textAlign="right">roles</Heading>
      <Heading
        fontSize={[2, 3, 5]} textAlign="right">
        full stack software engineer<br />
        community manager <br/>
        project manager
      </Heading>
    </Box>
    <Box mb={4}>
      <Heading variant="label" textAlign="right" mb={2}>In search of</Heading>
        <Heading
          fontSize={[1,2]} textAlign="right">
          a gentler future
      </Heading>
    </Box>
  </section>
  )
};


const StyledGreetingMasthead = styled(GreetingMasthead)`
  padding:4rem;
  border-bottom:1px solid ${(props) => props.theme.colors.black};

  background-image:url(${MastheadSVG});
  background-repeat:no-repeat;

  ${(props) => props.theme.mediaQueries.mobile} {
    background-size:150%;
    background-position:30% 30%;
  }

  ${(props) => props.theme.mediaQueries.tablet} {
    background-size:75%;
    background-position:-30% 30%;
  }
`

export default StyledGreetingMasthead;
