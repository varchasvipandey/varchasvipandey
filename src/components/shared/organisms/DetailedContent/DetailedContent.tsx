import Container from './DetailedContent.styles';
import { ContentCard, Button, SectionSubHeading, Text } from '../..';
import React from 'react';
import * as CSS from 'csstype';

interface DetailedContentInterface {
  style?: CSS.Properties;
}

const DetailedContent: React.FC<DetailedContentInterface> = ({ style }) => {
  return (
    <Container style={style}>
      <div className="content-card">
        <ContentCard style={{ marginRight: '2rem' }} />
      </div>
      <div className="content-info">
        <SectionSubHeading>Developed in June-July 2021</SectionSubHeading>
        <Text>
          Qui Lorem nisi nostrud est velit sit ad ea fugiat. Sunt excepteur et anim in qui labore
          incididunt. Voluptate et ullamco sunt et minim incididunt.
        </Text>
        <Button variant="secondary">View source & contribute</Button>
      </div>
    </Container>
  );
};
export default DetailedContent;
