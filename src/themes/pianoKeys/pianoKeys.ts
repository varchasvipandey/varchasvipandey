import { Theme } from '../interface';

const painoKeys: Theme = {
  colors: {
    primary: '#8775ed',
    primaryDark: '#4848b6',

    background: '#fefefe',
    section: '#fefefe',

    text: {
      title: '#333',
      sectionHeading: '#333',
      sectionSubHeading: '#666',
      sectionText: '#666',
      mutedText: '#999',
    },
  },

  gradients: {
    primary: 'linear-gradient(to bottom right, #4848b6, #8775ed 80%)',
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
      size: '1.8rem',
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
    light: '0 4px 8px rgba(0,0,0,0.1)',
    dark: '3px 6px 10px rgba(0,0,0,0.2)',
  },

  maxWidth: '970px',

  borderRadius: {
    canvas: '2rem',
    section: '2rem',
    card: '2rem',
    button: '1rem',
  },

  padding: {
    main: '1.2rem',
  },

  lineHeight: {
    paragraph: '3.2rem',
  },
};

export default painoKeys;