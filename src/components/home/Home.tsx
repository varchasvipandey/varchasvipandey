import {
  Intro,
  About,
  CommunityContent,
  UtilityProjects,
  GetEntertained,
  SideProjects,
  TechStack,
  GetInTouch,
} from '.';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      {/* Intro */}
      <Intro />

      {/* What I do */}
      <About />

      {/* JS community */}
      <CommunityContent />

      {/* My side projects */}
      <SideProjects />

      {/* My quick utility projects */}
      <UtilityProjects />

      {/* My tech stack at glance */}
      <TechStack />

      {/* get entertained */}
      <GetEntertained />

      {/* get in touch */}
      <GetInTouch />
    </>
  );
};

export default Home;
