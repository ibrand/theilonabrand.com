import * as React from 'react';
import styled from "styled-components"
import { Box, Heading } from 'rebass/styled-components'

interface ISectionHeadingProps {
  className: string,
  emoji: string,
  heading: string,
  subheader?: string
}

const SectionHeading: React.FunctionComponent<ISectionHeadingProps> = ({className, emoji, heading, subheader, ...props}) => {
  return(
  <Box className={className} {...props}>
    <Heading variant="heading">{heading}</Heading>
    {subheader && <Heading variant="subheader" mt={2} mb={0}>{subheader}</Heading>}
  </Box>
  )
};


const StyledSectionHeading = styled(SectionHeading)`
  padding:2rem 1rem;
  border-bottom:1px solid ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.white};

  ${props => props.tall && `
    padding-top:7rem;
  `}
`

export default StyledSectionHeading;
