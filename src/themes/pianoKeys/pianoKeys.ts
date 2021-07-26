import { Theme } from '../interface';

const painoKeys: Theme = {
  colors: {
    primary: '#8775ed',
    primaryDark: '#4848b6',

    background: '#fefefe',
    section: '#fefefe',

    text: {
      title: '#333',
      sectionHeading: '#000',
      sectionSubHeading: '#000',
      sectionText: '#333',
      mutedText: '#000',
    },
  },

  gradients: {
    primary: 'linear-gradient(to right, #8775ed, #4848b6 112%)',
  },

  fonts: {
    title: {
      size: '4rem',
      weight: '700',
    },
    sectionHeading: {
      size: '3.2rem',
      weight: '700',
    },
    sectionSubHeading: {
      size: '2.4rem',
      weight: '600',
    },
    sectionText: {
      size: '1.8rem',
      weight: '400',
    },
    mutedText: {
      size: '1.4rem',
      weight: '400',
    },
  },

  boxShadow: {
    normal: '0 3px 6px rgba(0,0,0,0.2)',
    light: '0 3px 6px rgba(0,0,0,0.2)',
    dark: '0 3px 6px rgba(0,0,0,0.2)',
  },

  maxWidth: '970px',

  borderRadius: {
    canvas: '2rem',
    section: '2rem',
    card: '2rem',
  },

  padding: {
    main: '1.2rem',
  },

  lineHeight: {
    paragraph: '3.2rem',
  },
};

export default painoKeys;
