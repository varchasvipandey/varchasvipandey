import Container from './Intro.styles';
import { Title, Text, Button } from '../..';
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Intro: React.FC = () => {
  const {
    site: {
      siteMetadata: { author, intro, extendedIntro, greetings, profession },
    },
    profileImage,
  } = useStaticQuery(graphql`
    query Intro {
      site {
        siteMetadata {
          author
          intro
          extendedIntro
          greetings
          profession
        }
      }

      profileImage: file(dir: { regex: "/images/profile/" }, name: { eq: "profile-512x512" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const [extendedIntroVisible, setExtendedIntroVisible] = useState(false);

  const showExtendedIntro = () => setExtendedIntroVisible(true);

  const profileImageUrl = getImage(profileImage);

  return (
    <Container extendedintro={extendedIntroVisible}>
      <div className="intro-text">
        <p className="intro-text__welcome">{greetings}</p>
        <Title>{author}</Title>
        <h2 className="intro-text__profession">{profession}</h2>
      </div>

      <div className="intro-card">
        <div className="intro-card__image">
          {profileImageUrl && <GatsbyImage image={profileImageUrl} alt="Varchasvi Pandey" />}
        </div>
        <div className="intro-card__content">
          <Text>{intro}</Text>
          {extendedIntroVisible ? (
            <Text>{extendedIntro}</Text>
          ) : (
            <Button variant="secondary" onClick={showExtendedIntro}>
              Read More
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Intro;
