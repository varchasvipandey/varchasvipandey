import Container from './DetailedContent.styles';
import { ContentCard, Button, SectionSubHeading, Text } from '../..';
import React from 'react';
import * as CSS from 'csstype';
import { QueryNode } from '../../../../types';

interface DetailedContentInterface {
  style?: CSS.Properties;
  content: QueryNode;
}

const DetailedContent: React.FC<DetailedContentInterface> = ({ style, content }) => {
  return (
    <Container style={style}>
      <div className="content-card">
        <ContentCard content={content} />
      </div>
      <div className="content-info">
        <SectionSubHeading>{content.frontmatter?.headline}</SectionSubHeading>
        <Text>{content.frontmatter?.description}</Text>
        <div className="content-info__button">
          <Button
            variant="secondary"
            disabled={!content.frontmatter?.secondaryUrl}
            onClick={() => window.open(content.frontmatter?.secondaryUrl)}
          >
            View source & contribute
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default DetailedContent;
