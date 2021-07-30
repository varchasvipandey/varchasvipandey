import { Section } from '../..';
import { Container, Image } from './TechStack.styles';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const TechStack: React.FC = () => {
  const data = useStaticQuery(graphql`
    {
      javascript: file(dir: { regex: "/images/techStack/" }, name: { eq: "javascript" }) {
        id
        publicURL
        name
      }
      typescript: file(dir: { regex: "/images/techStack/" }, name: { eq: "typescript" }) {
        id
        publicURL
        name
      }
      react: file(dir: { regex: "/images/techStack/" }, name: { eq: "react" }) {
        id
        publicURL
        name
      }
      express: file(dir: { regex: "/images/techStack/" }, name: { eq: "express" }) {
        id
        publicURL
        name
      }
      gatsby: file(dir: { regex: "/images/techStack/" }, name: { eq: "gatsby" }) {
        id
        publicURL
        name
      }
      nextjs: file(dir: { regex: "/images/techStack/" }, name: { eq: "nextjs" }) {
        id
        publicURL
        name
      }
      postgresql: file(dir: { regex: "/images/techStack/" }, name: { eq: "postgresql" }) {
        id
        publicURL
        name
      }
      firebase: file(dir: { regex: "/images/techStack/" }, name: { eq: "firebase" }) {
        id
        publicURL
        name
      }
      github: file(dir: { regex: "/images/techStack/" }, name: { eq: "github" }) {
        id
        publicURL
        name
      }
      adobexd: file(dir: { regex: "/images/techStack/" }, name: { eq: "adobexd" }) {
        id
        publicURL
        name
      }
    }
  `);

  const techImages = Object.values(data);
  const techAbout = Object.keys(data);

  return (
    <Section heading="My tech stack 🔨🧰">
      <Container>
        {techImages.map((image: any, i: number) => (
          <Image
            key={image.id}
            className="focus-image"
            src={image.publicURL}
            loading="lazy"
            alt={image.name}
            onMouseOver={() => console.log(techAbout[i])}
          />
        ))}
      </Container>
    </Section>
  );
};
export default TechStack;
