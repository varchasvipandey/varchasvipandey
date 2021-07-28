import { Section, Text, ContentTray } from '../..';
import React from 'react';

const CommunityContent: React.FC = () => {
  return (
    <Section heading="Content for community 💛">
      <Text>
        {
          "I've always loved delivering knowledge filled content. I regularly post knowledge-rich content on various platforms. I am sure you will love my efforts."
        }
      </Text>

      <div className="list">
        <ContentTray />
      </div>
    </Section>
  );
};
export default CommunityContent;
