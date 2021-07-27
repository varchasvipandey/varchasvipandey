import Container from './Intro.styles';
import { Title, Text } from '../..';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Intro: React.FC = () => {
  const {
    site: {
      siteMetadata: { author, intro, profileImageUrl, greetings, profession },
    },
  } = useStaticQuery(graphql`
    query Intro {
      site {
        siteMetadata {
          author
          intro
          profileImageUrl
          greetings
          profession
        }
      }
    }
  `);

  return (
    <Container>
      <div className="intro-text">
        <p className="intro-text__welcome">{greetings}</p>
        <Title>{author}</Title>
        <h2 className="intro-text__profession">{profession}</h2>
      </div>

      <div className="intro-card">
        <div className="intro-card__image">
          <img src={profileImageUrl} alt="" />
        </div>
        <div className="intro-card__content">
          <Text>{intro}</Text>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
