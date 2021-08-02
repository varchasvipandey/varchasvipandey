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
import { QueryNode } from '../../types';

interface HomeProps {
  communityContentList: QueryNode[];
  projectsList: QueryNode[];
  utilityProjectsList: QueryNode[];
  entertainmentContentList: QueryNode[];
}

const Home: React.FC<HomeProps> = ({
  communityContentList,
  utilityProjectsList,
  entertainmentContentList,
  projectsList,
}) => {
  return (
    <>
      {/* Intro */}
      <Intro />

      {/* What I do */}
      <About />

      {/* JS community */}
      <CommunityContent communityContentList={communityContentList} />

      {/* My side projects */}
      <SideProjects projectsList={projectsList} />

      {/* My quick utility projects */}
      <UtilityProjects utilityProjectsList={utilityProjectsList} />

      {/* My tech stack at glance */}
      <TechStack />

      {/* get entertained */}
      <GetEntertained entertainmentContentList={entertainmentContentList} />

      {/* get in touch */}
      <GetInTouch />
    </>
  );
};

export default Home;
