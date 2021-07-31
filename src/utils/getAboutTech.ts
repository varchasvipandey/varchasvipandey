const getAboutTech = (tech: string): string => {
  switch (tech) {
    case 'javascript':
      return 'Starting from 2019 JavaScript became an integral part of my coding journey. From making CLI applications using Node to building dynamic web applications, JS has been there with me.';

    case 'typescript':
      return 'TypeScript turned out to be that one sincere friend, my mom wanted me to be with. I started writing TS code in 2021. In fact, this portfolio is written in TS itself 😉';

    case 'react':
      return 'From making small fun projects to making applications loved by many people, React helped me making a living out of web development. Let us create a re-usable component named "Making"!';

    case 'express':
      return 'My full-stack journey started with Node.JS and over time got improved with Express! Express gave me confidence to introduce myself as a "Full stack developer" in many situations.';

    case 'gatsby':
      return 'This portfolio is a gatsby site. Started using this amazing technology in 2021 and realized how easy it is to make SEO friendly statically generated web applications! I call it React++';

    case 'nextjs':
      return 'If React is Poliwhirl and Gatsby is Poliwrath, Next is definitely Politoed. I think that makes JS Poliwag...🤔. I am still learning to deal with my Politoed, meanwhile you can copy paste this link - bit.ly/WTH_He_Just_Said';

    case 'postgresql':
      return 'After working with NoSQL for an year, I decided to bring some structure in my life. Since 2020, PostgreSQL became my go to database for storing all my secrets.';

    case 'firebase':
      return 'Most of my quickest applications are built on Firebase. Firebase never really gave me a chance to miss MongoDB. Since 2020, Firebase has been my Mongoose with some fancy modifications.';

    case 'github':
      return "Yes, I know how to use GitHub. Pretty strange for a developer, isn't it?";

    case 'adobexd':
      return '"Creativity is just connecting things" and this connection should be agile! Creating application prototype before actually developing it is something that I just can\'t miss.';

    default:
      return 'Hover over these icons to know more about my usage and experience!';
  }
};

export default getAboutTech;
