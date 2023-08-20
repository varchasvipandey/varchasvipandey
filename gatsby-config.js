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
    copyright: `${new Date().getFullYear()} Varchasvi Pandey`,
    author: 'Varchasvi Pandey',
    intro:
      "I've spent over 3 years diving deep into the world of React web and native development. My passion lies in crafting digital experiences that truly captivate and immerse users. I've got a knack for designing seamless UI/UX that feels like second nature, and I'm all about making sure every interaction is as smooth as can be.",
    extendedIntro:
      "I get a kick out of optimizing those user journeys - you know, making sure everything flows just right. The tech landscape is always evolving, and I'm right there on the cutting edge, harnessing all those cool new tools and technologies to bring ideas to life. But here's the real deal: I'm not just about code and pixels. I'm all about people - understanding what they want, need, and love. So, let's team up and cook up some seriously innovative and user-centric experiences together. I'm all ears for your ideas, and together, we'll create digital magic that leaves a lasting impact.",
    greetings: 'Hi there 👋, I am',
    profession: 'Software Engineer, Web & Native App Developer',
    footnote: 'developed to share & connect ❤ ',
  },
};
