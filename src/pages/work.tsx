import React from "react";
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../layouts/BaseLayout"
import SectionHeading from '../components/SectionHeading/SectionHeading';
import DesignResources from '@components/DesignResources/DesignResources';
import SEO from '@components/SEO/SEO';
import DevResources from '../components/DevResources/DevResources';
import Newsletter from '../components/Newsletter/Newsletter';
import PostLoop from '../components/PostLoop/PostLoop';

const Highlight = styled.span`
  color:${(props) => props.theme.colors.primary};
`

interface Props {
  data: any
}

export const work: React.FC<Props> = ({data}) => {
  let postImage
  if(data.design.edges.length > 0) {
    postImage = data.design.edges[0].image
  }
  return (
    <Layout className="About pt2">
      <SEO
        key="seo-work"
        title="Work"
        url="work"
        postImage={postImage}
      />
      {/*------- Work card grid -------*/}
      {/*<SectionHeading emoji="🎨" heading="Design resources" />*/}
      <DesignResources resources={data.design.edges} />
    </Layout>
  )
}

export const query = graphql`
  query WorkQuery {
    design: allResourcesJson {
      edges {
        node {
          resources {
            design {
              category
              link
              liveLink
              sourceLink
              name
              image
              description
              client
            }
          }
        }
      }
    }
  }
`;
// cover_image {
//     publicURL
//     childImageSharp {
//         fluid(maxWidth: 1240) {
//         ...GatsbyImageSharpFluid
//         }
//     }
// }
export default work
