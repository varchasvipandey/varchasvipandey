import Container from './ContentCard.styles';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { SectionSubHeading } from '../..';
import React from 'react';
import * as CSS from 'csstype';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { QueryNode } from '../../../../types';

interface ContentCardProps {
  style?: CSS.Properties;
  content: QueryNode;
}

interface LinkContainerProps {
  children: React.ReactNode;
  url: string;
}

const LinkContainer: React.FC<LinkContainerProps> = ({ children, url }) => {
  const linkStyle = { textDecoration: 'none' };
  if (!url.includes('http'))
    return (
      <Link to={url} style={linkStyle}>
        {children}
      </Link>
    );
  else
    return (
      <OutboundLink href={url} target="_blank" style={linkStyle}>
        {children}
      </OutboundLink>
    );
};

const ContentCard: React.FC<ContentCardProps> = ({ style, content }) => {
  const image = getImage(content?.frontmatter.thumb);

  return (
    <Container style={style}>
      <div className="image">{image && <GatsbyImage image={image} alt="image" />}</div>
      <div className="title">
        <LinkContainer url={content.frontmatter.url}>
          <SectionSubHeading
            style={{
              overflow: 'hidden !important',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {content?.frontmatter?.title}
          </SectionSubHeading>
        </LinkContainer>
      </div>
    </Container>
  );
};

export default ContentCard;
