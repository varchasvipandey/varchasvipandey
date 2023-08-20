import Container from './About.styles';
import { Section, Text, Button } from '../..';
import React from 'react';

const About: React.FC = () => {
  return (
    <Section heading="What I do? 👨‍💻">
      <Container>
        <Text>
          I am a part of a highly energetic & motivated team devoting all its time to making the
          healthcare system more reliable and friendly. At{' '}
          <span className="brand">Alyve Health</span>, we believe that health always comes first. We
          are on a mission, a mission to care and be by your side at each step.
        </Text>

        <div className="cta">
          <Button variant="secondary" onClick={() => window.open('https://alyve.health')}>
            Learn more about us
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open('https://programs.alyve.health/download-app')}
          >
            <span className="brand-logo">
              <img src="/alyve-logo.svg" alt="Alyve Health" />
            </span>
            Download Our App
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default About;
