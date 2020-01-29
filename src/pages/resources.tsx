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

export const resources: React.FC<Props> = ({data}) => {
  let postImage
  if(data.design.edges.length > 0) {
    postImage = data.design.edges[0].image
  }
  return (
    <Layout className="About pt2">
      <SEO
        key="seo-resources"
        title="Resources"
        url="resources"
        postImage={postImage}
      />
      {/*------- Design resources card grid -------*/}
      <SectionHeading emoji="🎨" heading="Design resources" />
      <DesignResources resources={data.design.edges} />

      {/*------- Dev resources data table -------*/}
      <SectionHeading tall emoji="⚙️" heading="Development resources" />
      <DevResources resources={data.development.edges} />

      {/*------- Lastest posts tagged tutorial -------*/}
      <SectionHeading emoji="📚" heading="Tutorials" tall />
      <PostLoop loop={data.projects.edges} skip={false} />

      <Newsletter />

    </Layout>
  )
}

export const query = graphql`
  query ResourcesQuery {
    projects: allMdx(
      sort: {fields: [frontmatter___date], order: DESC}, 
      limit: 4
      filter: { frontmatter: { tags: { in: ["tutorial"] } } }
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
    },
    development: allResourcesJson {
      edges {
        node {
          resources {
            development {
              categories
              link
              name
              software
              install
              description
            }
          }
        }
      }
    },
    design: allResourcesJson {
      edges {
        node {
          resources {
            design {
              category
              link
              name
              image
              description
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
export default resources
