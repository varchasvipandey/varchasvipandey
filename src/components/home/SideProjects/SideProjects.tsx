import { Section, Text, DetailedContent } from '../..';
import React from 'react';

const SideProjects: React.FC = () => {
  return (
    <Section heading="My side-projects 🎦">
      <Text>
        {
          'Taking time our for developing useful application always feels good. Here is a list of some of my best side-projects.'
        }
      </Text>

      <div className="list">
        <DetailedContent />
        <DetailedContent style={{ marginTop: '4.8rem' }} />
      </div>
    </Section>
  );
};
export default SideProjects;
