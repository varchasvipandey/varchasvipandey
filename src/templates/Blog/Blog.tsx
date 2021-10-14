import React, { useLayoutEffect, useState } from 'react';
import { Layout } from '../../components';
import Container from './Blog.style';
import { PageHeading, ActionTabs, Snackbar } from '../../components';
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
  const [snippetSnackbarVisible, setSnippetSnackbarVisible] = useState(false);

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

  // Script to add event listener to all pre tags for easy code copying
  useLayoutEffect(() => {
    if (!navigator) return;

    const codeSnippets = document.querySelectorAll('pre');

    codeSnippets.forEach((snippet) => {
      snippet.addEventListener('click', function () {
        const copyText = snippet.innerText;
        navigator.clipboard.writeText(copyText);
        setSnippetSnackbarVisible((prev) => {
          if (!prev) {
            setTimeout(() => {
              setSnippetSnackbarVisible(false);
            }, 1000);
            return true;
          } else return false;
        });
      });
    });
  }, []);

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

        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: item.description,
          }}
        ></div>

        <div className="footer">
          <ActionTabs actionItems={actionItems} />
        </div>

        {/* Code copied snackbar */}
        {snippetSnackbarVisible && <Snackbar label="SNIPPET COPIED!" />}
      </Container>
    </Layout>
  );
};

export default Blog;
