module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `G-7B2MEZG2FR`, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `babel-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `utilityProjects`,
        path: `${__dirname}/src/content/utilityProjects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `community`,
        path: `${__dirname}/src/content/community/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `entertainment`,
        path: `${__dirname}/src/content/entertainment/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Varchasvi Pandey',
    copyright: '2021 Varchasvi Pandey',
    author: 'Varchasvi Pandey',
    intro:
      'From writing UI architectures on a piece of paper to building full-fledged web applications is what defines me. I work with leading web technologies and designing tools all day every day to make thoughtful applications. 💻',
    greetings: 'Hi there 👋, I am',
    profession: 'Web application designer & developer',
    footnote: 'developed to share ❤ ',
  },
};
