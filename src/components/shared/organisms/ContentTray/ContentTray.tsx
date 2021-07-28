import Container from './ContentTray.styles';
import { ContentCard } from '../..';
import React from 'react';

const ContentTray: React.FC = () => {
  return (
    <Container>
      <ContentCard style={{ marginRight: '2rem' }} />
      <ContentCard style={{ marginRight: '2rem' }} />
      <ContentCard style={{ marginRight: '2rem' }} />
      <ContentCard style={{ marginRight: '2rem' }} />
    </Container>
  );
};

export default ContentTray;
