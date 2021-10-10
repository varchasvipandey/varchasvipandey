const fetch = require('node-fetch');

module.exports.createPages = async ({ actions: { createPage } }) => {
  const username = 'varchasvipandey';
  const mediumRss = `https://medium.com/feed/@${username}`;
  const ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=${mediumRss}`;

  // fetch medium posts
  const response = await fetch(ENDPOINT);
  const json = await response.json();

  // on successful fetch
  if (json.status === 'ok') {
    console.log('---------------MEDIUM POSTS------------------');

    // Create page to list blogs
    createPage({
      path: `/blog`,
      component: require.resolve('./src/templates/BlogHome/BlogHome.tsx'),
      context: { mediumBlogs: json.items },
    });
    console.log(`Page created at /blog`);

    // Create blog pages for individual posts
    json.items.forEach((item) => {
      const slug = item.title.toLowerCase().split(' ').join('-');
      createPage({
        path: `/blog/${slug}`,
        component: require.resolve('./src/templates/Blog/Blog.tsx'),
        context: { item, url: `https://varchasvipandey.com/blog/${slug}` },
      });
      console.log('Page created at ' + `/blog/${slug}`);
    });
  }
};
