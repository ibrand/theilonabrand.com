import React from 'react'
import styled from 'styled-components'
import {Box, Flex, Image, Text} from 'rebass/styled-components'

import Storybook from "@assets/svg/storybook.svg"
import CodePen from "@assets/svg/social-codepen.svg"
import Twitch from "@assets/svg/social-twitch.svg"
import YouTube from "@assets/svg/social-youtube.svg"
import Instagram from "@assets/svg/social-instagram.svg"
import Twitter from "@assets/svg/social-twitter.svg"
import LinkedIn from "@assets/svg/social-linkedin.svg"
import Dribbble from "@assets/svg/social-dribbble.svg"
import Behance from "@assets/svg/social-behance.svg"
import Github from "@assets/svg/social-github.svg"

const StyledFlex = styled(Flex)`
  padding:3rem 4rem;

  ${(props) => props.theme.mediaQueries.mobile} {
    text-align:center;
  }
  ${(props) => props.theme.mediaQueries.tablet} {
    text-align:left;
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
        <Box width={[1, 1, 1,1/3]} mb={3}>
          <Text variant="label">Copyright &copy; 2019, Ilona Brand</Text>
        </Box>
        <Box width={[1, 1, 1,1/3]} mb={3} textAlign="right">
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
