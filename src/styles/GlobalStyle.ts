import { Theme } from '../themes/interface';
import { createGlobalStyle, css } from 'styled-components';

interface Props {
  theme: Theme;
}

export default createGlobalStyle(
  ({ theme }: Props) => css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      border-spacing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${theme.gradients.primary};
      padding: 3.2rem 0;
      color: ${theme.colors.text.title};

      @media only screen and (max-width: ${theme.maxWidth}) {
        padding: 0;
      }
    }
  `,
);
