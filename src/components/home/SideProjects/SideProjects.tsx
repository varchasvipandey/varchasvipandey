import { Section, Text, DetailedContent } from '../..';
import React from 'react';
import { QueryNode } from '../../../types';

interface SideProjectsProps {
  projectsList: QueryNode[];
}

const SideProjects: React.FC<SideProjectsProps> = ({ projectsList }) => {
  console.log({ projectsList });

  return (
    <Section heading="My side-projects 🎦">
      <Text>
        {
          'Taking time out for developing useful applications always feels good. Here is a list of some of my best side-projects.'
        }
      </Text>

      <div className="list">
        {projectsList
          .sort((a, b) => {
            if (a?.frontmatter?.date! > b?.frontmatter?.date!) return -1;
            else return 1;
          })
          .map((project: QueryNode, i: number) => (
            <DetailedContent
              key={project.id}
              style={i + 1 === projectsList.length ? { marginTop: '6.2rem' } : {}}
              content={project}
            />
          ))}
      </div>
    </Section>
  );
};
export default SideProjects;
