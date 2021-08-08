import { Section, Text, ContentTray, MutedText } from '../..';
import React from 'react';
import { QueryNode } from '../../../types';

interface GetEntertainedProps {
  entertainmentContentList: QueryNode[];
}

const GetEntertained: React.FC<GetEntertainedProps> = ({ entertainmentContentList }) => {
  return (
    <Section heading="Get entertained! 🎶">
      <Text>
        {
          "I make fun musical content on Instagram and YouTube. I've been producing music for the last four years. Music keeps me active, music keeps me going & I love delivering the same in my style."
        }
      </Text>

      <div className="list">
        <ContentTray contentList={entertainmentContentList} />
      </div>

      <div style={{ textAlign: 'center', marginTop: '3.2rem' }}>
        <MutedText>
          {`"I ain't your boring dev" - `}
          <span style={{ textDecoration: 'line-through' }}>Jennifer Lopez</span> Me 😎
        </MutedText>
      </div>
    </Section>
  );
};
export default GetEntertained;
