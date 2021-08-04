import { Wrapper, Container } from './ContentTray.styles';
import { ContentCard } from '../..';
import React from 'react';
import { QueryNode } from '../../../../types';

interface ContentTrayProps {
  contentList: QueryNode[];
}

interface HTMLChildNode extends ChildNode {
  offsetWidth?: number;
}

const elementWidth = (el: HTMLChildNode): any => {
  return el.offsetWidth;
};

const ContentTray: React.FC<ContentTrayProps> = ({ contentList = [] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string): void => {
    const container = containerRef.current;
    if (container) {
      const firstContent = container?.firstChild;
      if (firstContent) {
        let scrollXBy = elementWidth(firstContent);

        if (direction === 'left') scrollXBy *= -1;
        container.scrollBy({ left: scrollXBy, behavior: 'smooth' });
      }
    }
  };

  return (
    <Wrapper>
      <Container ref={containerRef}>
        {contentList.map((content: QueryNode) => (
          <ContentCard key={content.id} style={{ marginRight: '2rem' }} content={content} />
        ))}
      </Container>

      <div className="nav-btn nav-btn__left" onClick={() => handleScroll('left')}>
        <img src="./assets/chevron-back-outline.svg" alt="" />
      </div>
      <div className="nav-btn nav-btn__right" onClick={() => handleScroll('right')}>
        <img src="./assets/chevron-forward-outline.svg" alt="" />
      </div>
    </Wrapper>
  );
};

export default ContentTray;
