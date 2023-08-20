import {
  Intro,
  About,
  CommunityContent,
  GetEntertained,
  SideProjects,
  TechStack,
  GetInTouch,
} from '.';

import React from 'react';
import { QueryNode } from '../../types';

interface HomeProps {
  communityContentList: QueryNode[];
  projectsList: QueryNode[];
  utilityProjectsList: QueryNode[];
  entertainmentContentList: QueryNode[];
}

const Home: React.FC<HomeProps> = ({
  communityContentList,
  entertainmentContentList,
  projectsList,
}) => {
  return (
    <>
      <div id="about-me">
        {/* Intro */}
        <Intro />

        {/* What I do */}
        <About />
      </div>

      <div id="community-content">
        {/* JS community */}
        <CommunityContent communityContentList={communityContentList} />
      </div>

      <div id="side-projects">
        {/* My side projects */}
        <SideProjects projectsList={projectsList} />
      </div>

      <div id="tech-stack">
        {/* My tech stack at glance */}
        <TechStack />
      </div>

      <div id="get-entertained">
        {/* get entertained */}
        <GetEntertained entertainmentContentList={entertainmentContentList} />
      </div>

      <div id="connect">
        {/* get in touch */}
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
