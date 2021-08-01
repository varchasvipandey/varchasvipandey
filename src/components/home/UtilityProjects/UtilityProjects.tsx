import { Section, Text, ContentTray } from '../..';
import React from 'react';
import { QueryNode } from '../../../types';

interface UtilityProjectsProps {
  utilityProjectsList: QueryNode[];
}

const UtilityProjects: React.FC<UtilityProjectsProps> = ({ utilityProjectsList }) => {
  return (
    <Section heading="My quick utility projects ⌨">
      <Text>
        {
          "Projects that I've built while experimenting with new technologies, be it another library, bundler or API. These are small yet highly useful applications."
        }
      </Text>

      <div className="list">
        <ContentTray contentList={utilityProjectsList} />
      </div>
    </Section>
  );
};
export default UtilityProjects;
