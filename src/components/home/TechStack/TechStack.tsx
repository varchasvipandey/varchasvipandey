import { Section, MutedText } from '../..';
import { Container, Image, FootNotes } from './TechStack.styles';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import getAboutTech from '../../../utils/getAboutTech';

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
  const techKeys: string[] = Object.keys(data);

  // States
  const [selectedTech, setSelectedTech] = React.useState<string>('');
  const [pauseScroll, setPauseScroll] = React.useState<boolean>(false);

  // DOM Refs
  const scroller = React.useRef<HTMLDivElement | null>(null);

  // -- check elem view port
  const isElementInViewport = (el: HTMLDivElement) => {
    var rect = el.getBoundingClientRect();
    return rect.right > 0;
  };

  /* Scroll init */
  React.useEffect(() => {
    if (pauseScroll) return;

    const scrollContainer = document.getElementById('scroll-container') as HTMLDivElement;
    const scrollContainerWidth = scrollContainer.scrollWidth;

    const scrollInterval = self.setInterval(() => {
      const first = document.querySelector('#scroll-container div') as HTMLDivElement;
      if (!isElementInViewport(first)) {
        scrollContainer.appendChild(first);
        scrollContainer.scrollTo(scrollContainer.scrollLeft - first.offsetWidth, 0);
        console.log('set');
      }
      if (scrollContainer.scrollLeft !== scrollContainerWidth) {
        scrollContainer.scrollTo(scrollContainer.scrollLeft + 1, 0);
      }
    }, 15);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [pauseScroll]);

  return (
    <Section heading="My tech stack 🔨🧰">
      <Container ref={scroller} id="scroll-container">
        {techImages.map((image: any, i: number) => (
          <div
            className="image-container"
            key={image.id}
            onMouseOver={() => {
              setSelectedTech(techKeys[i]);
              setPauseScroll(true);
            }}
            onMouseOut={() => {
              setPauseScroll(false);
            }}
          >
            <Image className="focus-image" src={image.publicURL} loading="lazy" alt={image.name} />
          </div>
        ))}
      </Container>

      <FootNotes>
        <MutedText>{getAboutTech(selectedTech)}</MutedText>
      </FootNotes>
    </Section>
  );
};
export default TechStack;
