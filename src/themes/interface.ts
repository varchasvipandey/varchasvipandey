import * as CSS from 'csstype';

export interface Font {
  size: string;
  weight: string;
}

export interface Theme {
  id: number;
  name: string;

  colors: {
    primary: string;
    primaryDark: string;

    background: string;
    section: string;

    text: {
      title: string;
      sectionHeading: string;
      sectionSubHeading: string;
      sectionText: string;
      link: string;
      menu: string;
      mutedText: string;
    };
  };

  gradients: {
    primary: string;
  };

  fonts: {
    title: Font;
    sectionHeading: Font;
    sectionSubHeading: Font;
    sectionText: Font;
    link: Font;
    mutedText: Font;
  };

  boxShadow: {
    normal: string;
    light: string;
    dark: string;
  };

  borderRadius: {
    canvas: string; // main view radius
    section: string; // section radius
    card: string; // card radius
    button: string; // button radius
  };

  padding: {
    main: string;
    menu: string;
  };

  lineHeight: {
    paragraph: string;
  };

  maxWidth: string; // maximum width of the content area

  /* Break points */
  breakpoints: {
    desktop: string;
    tabletLS: string;
    tabletPT: string;
    mobile: string;
    mobileSlim: string;
  };
}

export interface StyledComponentProps {
  theme: Theme;
  style?: CSS.Properties;
}
