import Container from './ContentCard.styles';
import { SectionSubHeading } from '../..';
import React from 'react';
import * as CSS from 'csstype';

interface ContentCardProps {
  style?: CSS.Properties;
}

const ContentCard: React.FC<ContentCardProps> = ({ style }) => {
  return (
    <Container style={style}>
      <div className="image">
        <img src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="" />
      </div>
      <div className="title">
        <SectionSubHeading>Random Text</SectionSubHeading>
      </div>
    </Container>
  );
};

export default ContentCard;
