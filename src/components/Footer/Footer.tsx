import React from 'react'
import styled from 'styled-components'
import {Box, Flex, Image, Text} from 'rebass/styled-components'

import Instagram from "@assets/svg/social-instagram-white.svg"
import LinkedIn from "@assets/svg/social-linkedin-white.svg"
import Github from "@assets/svg/social-github-white.svg"

const StyledFooter = styled.footer`
  color: white;
  
  a {
    color: white;
    border-color: #F2995C;
  }
`;

const StyledFlex = styled(Flex)`
  padding:1.5em 4em;

  ${(props) => props.theme.mediaQueries.mobile} {
    padding:0.8em 2.5em;
    text-align:center;
  }
  ${(props) => props.theme.mediaQueries.tablet} {
    text-align:center;
  }
`

const StyledIconLink = styled.a`
  border-bottom:0;
  margin-right:1em;
  
  ${(props) => props.theme.mediaQueries.mobile} {
    img {
      margin-top: 8px;
      height: 20px;
      width: 20px;
    }
  }
 
  ${(props) => props.theme.mediaQueries.tablet} {
    img {
      height: 30px;
      width: 30px;
    }
  }
`

interface Props {

}

export const Footer: React.FC<Props> = () => {
  return (
      <StyledFooter>
    <Box as="footer">
      <StyledFlex justifyContent="space-between" flexWrap="wrap">
        <Box width={[1, 1, 1/2, 1/2]}>
          <Text variant="label">Copyright &copy; 2020, Ilona Brand</Text>
          <Text variant="label">Background art by <a href={"https://www.instagram.com/backbeyonds/"} target={"_blank"}>@backbeyonds</a></Text>
        </Box>
        <Box width={[1, 1, 1/2, 1/2]}>
          <StyledIconLink href={"https://github.com/ibrand"} target={"_blank"}><Image src={Github} /></StyledIconLink>
          <StyledIconLink href={"https://instagram.com/theilonabrand"} target={"_blank"}><Image src={Instagram} /></StyledIconLink>
          <StyledIconLink href={"https://linkedin.com/in/theilonabrand"} target={"_blank"}><Image src={LinkedIn} /></StyledIconLink>
        </Box>
      </StyledFlex>
    </Box>
      </StyledFooter>
  )
}
export default Footer
