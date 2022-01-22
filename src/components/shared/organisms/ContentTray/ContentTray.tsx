import { Wrapper, Container } from './ContentTray.styles';
import { ContentCard } from '../..';
import React from 'react';
import { QueryNode } from '../../../../types';
import { BackIcon, ForwardIcon } from '../../../../icons';

interface ContentTrayProps {
  contentList: QueryNode[];
}

const ContentTray: React.FC<ContentTrayProps> = ({ contentList = [] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string): void => {
    const container = containerRef.current;
    if (container) {
      let scrollXBy = container.offsetWidth;
      if (direction === 'left') scrollXBy *= -1;
      container.scrollBy({ left: scrollXBy, behavior: 'smooth' });
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
        <BackIcon />
      </div>
      <div className="nav-btn nav-btn__right" onClick={() => handleScroll('right')}>
        <ForwardIcon />
      </div>
    </Wrapper>
  );
};

export default ContentTray;
