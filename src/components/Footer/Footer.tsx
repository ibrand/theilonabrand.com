import React from 'react'
import styled from 'styled-components'
import {Box, Flex, Image, Text} from 'rebass/styled-components'

import Instagram from "@assets/svg/social-instagram.svg"
import LinkedIn from "@assets/svg/social-linkedin.svg"
import Github from "@assets/svg/social-github.svg"

const StyledFlex = styled(Flex)`
  padding:2rem 4rem;
  height: 20px;

  ${(props) => props.theme.mediaQueries.mobile} {
    text-align:center;
  }
  ${(props) => props.theme.mediaQueries.tablet} {
    text-align:center;
  }
`

const StyledLink = styled.a`
  border-bottom:0;
  margin-right:1em;
  opacity:0.5;
  transition:opacity ${(props) => props.theme.animation.default};

  &:hover {
    opacity:1;
  }
`

interface Props {

}

export const Footer: React.FC<Props> = () => {
  return (
    <Box as="footer">
      <StyledFlex justifyContent="space-between" flexWrap="wrap">
        <Box width={[1, 1, 1/2, 1/2]} mb={3}>
          <Text variant="label">Copyright &copy; 2020, Ilona Brand</Text>
          <Text variant="label">Background art by <a href={"https://www.instagram.com/backbeyonds/"}>@backbeyonds</a></Text>
        </Box>
        <Box width={[1, 1, 1/2, 1/2]} mb={3}>
        <StyledLink href="https://github.com/ibrand">
          <Image src={Github} />
        </StyledLink>
        <StyledLink href="https://instagram.com/theilonabrand">
          <Image src={Instagram} />
        </StyledLink>
        <StyledLink href="https://linkedin.com/in/theilonabrand">
          <Image src={LinkedIn} />
        </StyledLink>
        </Box>
      </StyledFlex>
    </Box>
  )
}

export default Footer
