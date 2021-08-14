import { Theme } from '../interface';

const darkHarmonica: Theme = {
  id: 1,
  name: 'Dark Harmonica',

  colors: {
    primary: '#8775ed',
    primaryDark: '#4848b6',

    background: '#323232',
    section: '#323232',

    text: {
      title: '#eee',
      sectionHeading: '#eee',
      sectionSubHeading: '#ddd',
      sectionText: '#ddd',
      link: '#ccc',
      menu: '#eee',
      mutedText: '#ccc',
    },
  },

  gradients: {
    primary: 'linear-gradient(to bottom right, #222, #333 80%)',
  },

  fonts: {
    title: {
      size: '4.8rem',
      weight: '700',
    },
    sectionHeading: {
      size: '3.2rem',
      weight: '700',
    },
    sectionSubHeading: {
      size: '1.8rem',
      weight: '600',
    },
    sectionText: {
      size: '1.8rem',
      weight: '400',
    },
    link: {
      size: '1.6rem',
      weight: '400',
    },
    mutedText: {
      size: '1.4rem',
      weight: '400',
    },
  },

  boxShadow: {
    normal: '0 3px 6px rgba(0,0,0,0.2)',
    light: '0 4px 8px rgba(0,0,0,0.1)',
    dark: '3px 6px 10px rgba(0,0,0,0.2)',
  },

  borderRadius: {
    canvas: '2rem',
    section: '2rem',
    card: '2rem',
    button: '1rem',
  },

  padding: {
    main: '1.2rem',
    menu: '2.4rem',
  },

  lineHeight: {
    paragraph: '3.2rem',
  },

  maxWidth: '970px',

  /* Break points */
  breakpoints: {
    desktop: '1200px',
    tabletLS: '720px',
    tabletPT: '640px',
    mobile: '460px',
    mobileSlim: '360px',
  },
};

export default darkHarmonica;
