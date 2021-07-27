import Container from './Section.styles';
import React from 'react';
import { SectionHeading } from '..';

export interface SectionProps {
  heading: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ heading, children }) => {
  return (
    <Container>
      {/* Heading */}
      <div className="heading">
        <SectionHeading>{heading}</SectionHeading>
      </div>

      {/* Content container */}
      <div className="content">{children}</div>
    </Container>
  );
};

export default Section;
