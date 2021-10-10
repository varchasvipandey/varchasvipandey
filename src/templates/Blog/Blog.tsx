import React from 'react';
import { Layout } from '../../components';
import Container from './Blog.style';
import { PageHeading, ActionTabs } from '../../components';
import dateAgoFormat from '../../utils/dateAgoFormat';
import { MediumBlog } from '../BlogHome/BlogHome';
import { ShareIcon, HeartIcon } from '../../icons';

interface BlogProps {
  pageContext?: {
    item: MediumBlog;
    url: string;
  };
}

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
  if (!pageContext) return null;

  const { item, url } = pageContext;

  const actionItems = [
    {
      Icon: <ShareIcon style={{ width: '2rem' }} />,
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: item.title,
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
          window.open(item.link);
        }
      },
      tooltip: 'Like it on Medium',
    },
  ];

  return (
    <Layout
      emptyCanvas
      title={item.title.replace('&amp;', '&') + ' | Varchasvi Pandey'}
      description={item.description.replace(/(<([^>]+)>)/gi, '').slice(0, 160)}
      image={item.thumbnail}
      keywords={item.categories.join(', ')}
      url={url}
    >
      <Container thumbnail={item.thumbnail}>
        <div className="header">
          <PageHeading className="header__title">{item.title.replace('&amp;', '&')}</PageHeading>
        </div>

        <div className="meta-action">
          <p className="meta-action__date">Published on {dateAgoFormat(item.pubDate)}</p>
          <div className="meta-action__actions">
            <ActionTabs actionItems={actionItems} />
          </div>
        </div>

        <div className="body" dangerouslySetInnerHTML={{ __html: item.description }}></div>

        <div className="footer">
          <ActionTabs actionItems={actionItems} />
        </div>
      </Container>
    </Layout>
  );
};

export default Blog;
