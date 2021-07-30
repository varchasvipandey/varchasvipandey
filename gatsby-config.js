module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Varchasvi Pandey',
    copyright: '2021 Varchasvi Pandey',
    author: 'Varchasvi Pandey',
    profileImageUrl:
      'https://media-exp1.licdn.com/dms/image/C4E03AQG03pWoEs66HA/profile-displayphoto-shrink_100_100/0/1597684760659?e=1632960000&v=beta&t=niOvTEwJFTcwuf8v-buzrrMMp-8mD_LRfhmW7nUMVkE',
    intro:
      'From writing UI architectures on a piece of paper to building full-fledged web-applications is what defines me. I work with leading web technologies and designing tools all day, every day to make thoughtful applications. 💻',
    greetings: 'Hi there 👋, I am',
    profession: 'Front-end designer & developer',
    footnote: 'developed to share ❤ ',
  },
};
