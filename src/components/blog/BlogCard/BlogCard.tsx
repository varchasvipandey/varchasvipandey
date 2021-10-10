import React from 'react';
import Container from './BlogCard.style';
import { SectionHeading, Text } from '../../shared';
import { ActionTabs } from '../';
import { ShareIcon, HeartIcon } from '../../../icons';

interface BlogCardProps {
  title: string;
  description: string;
  thumbnail: string;
  date: string | null;
  url: string;
  link: string;
  onClickHandler?: Function;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  thumbnail,
  date,
  url,
  link,
  onClickHandler,
}) => {
  const actionItems = [
    {
      Icon: <ShareIcon style={{ width: '2rem' }} />,
      action: () => {
        if (navigator.share) {
          navigator.share({
            title,
            url,
          });
        } else
          alert(
            "I'm pleased to see that you are sharing this story but it looks like your browser does not support one tap sharing feature. Please copy the URL to share. Thank you!",
          );
      },
      tooltip: 'Copy link to share',
    },
    {
      Icon: <HeartIcon style={{ width: '2rem' }} />,
      action: () => {
        if (window) {
          window.open(link);
        }
      },
      tooltip: 'Like it on Medium',
    },
  ];

  return (
    <Container thumbnail={thumbnail} onClick={() => onClickHandler && onClickHandler()}>
      <div className="thumbnail">
        <img src={thumbnail} alt="alt" loading="lazy" />
      </div>
      <div className="info">
        <div className="info__section info__header">
          <SectionHeading>{title}</SectionHeading>
          <p className="info__header__date">Published: {date}</p>
        </div>
        <Text className="info__section">{description}</Text>
        <div className="info__section info__action">
          <ActionTabs actionItems={actionItems} />
        </div>
      </div>
    </Container>
  );
};

export default BlogCard;
