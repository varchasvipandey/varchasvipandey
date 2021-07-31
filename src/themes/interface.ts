export interface Font {
  size: string;
  weight: string;
}

export interface Theme {
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

  maxWidth: string; // maximum width of the content area

  borderRadius: {
    canvas: string; // main view radius
    section: string; // section radius
    card: string; // card radius
    button: string; // button radius
  };

  padding: {
    main: string;
  };

  lineHeight: {
    paragraph: string;
  };
}

export interface StyledComponentProps {
  theme: Theme;
}
