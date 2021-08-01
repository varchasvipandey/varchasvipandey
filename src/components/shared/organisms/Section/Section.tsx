import Container from './Section.styles';
import { SectionHeading } from '../..';
import React from 'react';
import * as CSS from 'csstype';

export interface SectionProps {
  heading: string;
  children: React.ReactNode;
  style?: CSS.Properties;
  flatBody?: boolean;
}

const Section: React.FC<SectionProps> = ({ heading, children, style = {}, flatBody = false }) => {
  return (
    <Container style={style} flatBody={flatBody}>
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
