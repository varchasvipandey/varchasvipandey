import React from 'react';
import { Layout } from '../../components';
import Container from './Blog.style';
import { PageHeading } from '../../components';
import dateAgoFormat from '../../utils/dateAgoFormat';

interface MediumBlog {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: object;
  categories: string[];
}

interface BlogProps {
  pageContext?: {
    item: MediumBlog;
    url: string;
  };
}

export default function Blog({ pageContext }: BlogProps) {
  if (!pageContext) return null;

  const { item, url } = pageContext;

  return (
    <Layout
      emptyCanvas
      title={item.title + ' | Varchasvi Pandey'}
      description={item.description.slice(0, 160).replace(/(<([^>]+)>)/gi, '')}
      image={item.thumbnail}
      keywords={item.categories.join(', ')}
      url={url}
    >
      <Container thumbnail={item.thumbnail}>
        <div className="header">
          <PageHeading className="header__title">{item.title}</PageHeading>
        </div>

        <div className="meta-action">
          <p className="meta-action__date">Published on {dateAgoFormat(item.pubDate)}</p>
          <div className="meta-action__actions"></div>
        </div>

        <div className="body" dangerouslySetInnerHTML={{ __html: item.description }}></div>
      </Container>
    </Layout>
  );
}
