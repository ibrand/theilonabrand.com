import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex, Text, Heading, Image } from 'rebass/styled-components'

import Layout from '../layouts/BaseLayout'
import SEO from '@components/SEO/SEO';
import SectionHeading from '../components/SectionHeading/SectionHeading'
import Skills from '../components/Skills/Skills'
import Newsletter from '../components/Newsletter/Newsletter'
import PostLoop from '../components/PostLoop/PostLoop'
import Contact from '../components/Contact/Contact'

import BombEmoji from '../assets/img/emoji/bomb.png'
import IlonaPortrait from '../assets/img/ilona.jpg'

const Highlight = styled.span`
  color: ${props => props.theme.colors.primary};
`

export default class Frontpage extends Component {

  render() {
    let { data } = this.props
    const skip = false

    return (
      <Layout className="About pt2">
        <SEO
          key="seo-about"
          title="About"
          url="about"
        />
        <Box px={3} py={5} sx={{ borderBottom: '1px solid black' }}>
          <Heading fontSize={[4, 5, 6]}>
            Ilona Builds Technology that Should Exist
          </Heading>
          <Heading fontSize={[1, 2, 3]}>
            In search of a Gentler Future.
          </Heading>
        </Box>
        <Flex
          sx={{ borderBottom: '1px solid black' }}
          flexWrap="wrap"
        >
          <Box as="figure" width={[1, 1, 1 / 3]} textAlign="center" sx={{backgroundImage:`url(${IlonaPortrait})`, backgroundPosition:'center', backgroundSize:'cover'}} />

          <Box width={[1, 1, 2 / 3]}
            px={3}
            py={5}>
            <Text variant="paragraph" px={[1.7,1.7,4]} mt={4} mb={4}>
              I freelance and contract as a tech worker occupying cross functional roles in software engineering, management and organizing.
              Most of my work is in science, art, politics, and the progressive grassroots world aligning with a mission
              to create technology that empowers communities and inspires individuals.
            </Text>
            <Text variant="paragraph" px={[1.7,1.7,4]}>
              I also write poetry, make music, and occasionally create a visual piece. My academic background is in film,
              and I attended The School for Poetic Computation where I learned about the intersections of art and technology.
            </Text>
          </Box>
        </Flex>

        {/*<Skills />*/}

        {/*------- Featured image -------*/}
        <SectionHeading heading="Recent work" tall />
        {/*------- Posts loop -------*/}
        <PostLoop loop={data.projects.edges} skip={skip} />
        {/*<Newsletter />*/}
      </Layout>
    )
  }
}

export const query = graphql`
  query AboutQuery {
    projects: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
      filter: { frontmatter: { section: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            section
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
// cover_image {
//   publicURL
//   childImageSharp {
//     fluid(maxWidth: 1240) {
//     ...GatsbyImageSharpFluid
//     }
//   }
// }
