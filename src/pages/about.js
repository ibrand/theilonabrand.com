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
import RyosukePortrait from '../assets/img/self-portrait-blue-w-text.jpg'

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
          <Heading fontSize={[1, 2, 3]}>
            Ryosuke meaning <Highlight>clear</Highlight> mediation.
          </Heading>
          <Heading fontSize={[4, 5, 6]}>
            The artist formerly known as <Highlight>Oscar</Highlight>{' '}
            <Image src={BombEmoji} alt="Bomb emoji" width="40px" />
          </Heading>
        </Box>
        <Flex
          sx={{ borderBottom: '1px solid black' }}
          flexWrap="wrap"
        >
          <Box as="figure" width={[1, 1, 2 / 3]} minHeight={6} textAlign="center" sx={{backgroundImage:`url(${RyosukePortrait})`, backgroundPosition:'center', backgroundSize:'cover'}} />

          <Box width={[1, 1, 1 / 3]}
            px={3}
            py={5}>
            <Text variant="paragraph" px={5} mt={4} mb={4}>
              I've been working as a designer and developer for{' '}
              <strong>over 15 years now</strong>, with over a decade of
              experience in the cannabis industry.
            </Text>
            <Text variant="paragraph" px={5}>
              From engineering <a href="http://kushy.net">web apps</a> and
              e-commerce solutions, to designing brands and products, to
              producing innovative digital media, and even creating{' '}
              <strong>
                famous{' '}
                <a href="http://weedporndaily.tumblr.com/tagged/gif">
                  ganja related GIFs
                </a>
              </strong>{' '}
              -- my experience as an <strong>entrepreneur</strong> has broadened
              my skillset substantially.
            </Text>
          </Box>
        </Flex>

        <Skills />

        {/*------- Featured image -------*/}
        <SectionHeading emoji="🚀" heading="My recent work" tall />
        {/*------- Posts loop -------*/}
        <PostLoop loop={data.projects.edges} skip={skip} />

        {/*------- Speaking / Workshops -------*/}
        <SectionHeading emoji="🎓" heading="Speaking and Workshops" tall />
        <Box
          as="section"
          px={3}
          py={5}
          className="Speaking"
          sx={{ borderBottom: '1px solid black' }}
        >
          <Text px={5}>
            I’m available for speaking gigs,{' '}
            <a href="mailto:ryosuke.san.hana@gmail.com">contact me anytime</a>.
            I love to speak about my experiences with full-stack development,
            entrepreneurship, or design and branding.
          </Text>
          {/* <h3 className="Title text blue">Upcoming Speaking Engagements</h3>
                    <ul>
                        <li>
                            <a href="#">Gig</a>
                        </li>
                    </ul> */}
          {/* <h3 className="Title text blue">Previous Speaking Engagements</h3> */}
        </Box>

        <Newsletter />

        <Contact />
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
