import { Section, Text, DetailedContent } from '../..';
import React from 'react';
import { QueryNode } from '../../../types';

interface SideProjectsProps {
  projectsList: QueryNode[];
}

const SideProjects: React.FC<SideProjectsProps> = ({ projectsList }) => {
  console.log({ projectsList });

  return (
    <Section heading="My projects 🎦">
      <Text>
        {
          "With 3+ years of expertise, I've crafted innovative web & native solutions, driving healthcare excellence & more. Let's dive into some of the recent projects I've been a part of!"
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
