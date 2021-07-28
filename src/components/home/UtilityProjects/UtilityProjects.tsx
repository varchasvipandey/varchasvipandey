import { Section, Text, ContentTray } from '../..';
import React from 'react';

const UtilityProjects: React.FC = () => {
  return (
    <Section heading="My quick utility projects ⌨">
      <Text>
        {
          "Projects that I've built while experimenting with new technologies be it another library, bundler or API. These are small yet highly useful applications."
        }
      </Text>

      <div className="list">
        <ContentTray />
      </div>
    </Section>
  );
};
export default UtilityProjects;
