import { Layout } from '../components/index';
import { Home } from '../components/home';
import React from 'react';
import { graphql } from 'gatsby';
import { QueryNode } from '../types';

interface Query {
  projects: {
    nodes: QueryNode[];
  };
  utilityProjects: {
    nodes: QueryNode[];
  };
  community: {
    nodes: QueryNode[];
  };
}

export const query: Query | void = graphql`
  query Content {
    projects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      nodes {
        frontmatter {
          title
          date
          publishedOn
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          url
          secondaryUrl
          headline
          description
        }
        id
      }
    }
    utilityProjects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/utilityProjects/" } }
    ) {
      nodes {
        frontmatter {
          title
          date
          publishedOn
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          url
        }
        id
      }
    }
    community: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/community/" } }) {
      nodes {
        frontmatter {
          title
          date
          publishedOn
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          url
        }
        id
      }
    }
    entertainment: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/entertainment/" } }) {
      nodes {
        frontmatter {
          title
          date
          publishedOn
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          url
        }
        id
      }
    }
  }
`;

export default ({ data }: { data: any }) => {
  const communityContentList: QueryNode[] = data.community.nodes;
  const entertainmentContentList: QueryNode[] = data.entertainment.nodes;
  const utilityProjectsList: QueryNode[] = data.utilityProjects.nodes;
  const projectsList: QueryNode[] = data.projects.nodes;

  return (
    <Layout
      title="Varchasvi Pandey - Web designer & developer"
      description="Web application designer and developer based out of New Delhi, India. Founding team member and Front-end engineer at Alyve Health. Creating front-end architectures, designs and developing web based applications using React and TypeScript."
    >
      <Home
        communityContentList={communityContentList}
        projectsList={projectsList}
        utilityProjectsList={utilityProjectsList}
        entertainmentContentList={entertainmentContentList}
      />
    </Layout>
  );
};
