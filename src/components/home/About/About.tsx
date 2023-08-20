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
          are building a modern health "E"nsurance solution by enabling easy access to all
          health-related needs like doctor consultation, medicine delivery, diagnostic, health
          insurance and fitness programs.
        </Text>

        <section className="highlights">
          <Text>What I've been doing at Alyve Health?</Text>

          <Text>
            ● Creating several customer-facing modules on the web with over 600K active users.
          </Text>
          <Text>● Enhancing the front-end to simplify customers' and developers' life.</Text>
          <Text>● Designing architectures for both front-end web and native applications.</Text>
          <Text>● Developing and maintaining native applications with over 1M users.</Text>
          <Text>● Ensuring agile development by leading the team.</Text>
        </section>

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
