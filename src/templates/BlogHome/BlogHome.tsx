import React from 'react';
import { Layout, PageHeading, BlogCard } from '../../components';
import Container from './BlogHome.style';
import dateAgoFormat from '../../utils/dateAgoFormat';
import { navigate } from 'gatsby';

export interface MediumBlog {
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

interface BlogHomeProps {
  pageContext: {
    mediumBlogs: MediumBlog[];
  };
}

const BlogHome: React.FC<BlogHomeProps> = ({ pageContext: { mediumBlogs } }) => {
  return (
    <Layout
      emptyCanvas
      title="Blog | Varchasvi Pandey"
      description="Read blogs by Varchasvi Pandey. Explore the list of super easy to read and understand tech blogs on web development and software engineering."
      keywords="blogs, web development, varchasvi blogs, react blogs, frontend blogs"
    >
      <Container>
        <PageHeading style={{ textAlign: 'center' }}>Blogs and stories by me</PageHeading>

        <div className="blogs-list">
          {mediumBlogs.map((blog) => (
            <BlogCard
              key={blog.guid}
              title={blog.title}
              description={blog.description.replace(/(<([^>]+)>)/gi, '').slice(0, 150) + '...'}
              thumbnail={blog.thumbnail}
              date={dateAgoFormat(blog.pubDate)}
              url={`https://varchasvipandey.com/${blog.title.toLowerCase().split(' ').join('-')}`}
              link={blog.link}
              onClickHandler={() =>
                navigate(`/blog/${blog.title.toLowerCase().split(' ').join('-')}`)
              }
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default BlogHome;
