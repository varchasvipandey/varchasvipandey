import Container from './ContentTray.styles';
import { ContentCard } from '../..';
import React from 'react';
import { QueryNode } from '../../../../types';

interface ContentTrayProps {
  contentList: QueryNode[];
}

const ContentTray: React.FC<ContentTrayProps> = ({ contentList = [] }) => {
  return (
    <Container>
      {contentList.map((content: QueryNode) => (
        <ContentCard key={content.id} style={{ marginRight: '2rem' }} content={content} />
      ))}
    </Container>
  );
};

export default ContentTray;
