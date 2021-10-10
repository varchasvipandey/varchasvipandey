import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

interface LayoutContainer extends StyledComponentProps {
  emptyCanvas?: boolean;
}

export default styled.main(
  ({ theme, emptyCanvas }: LayoutContainer) => css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    background-color: ${theme.colors.background};
    border-radius: ${theme.borderRadius.canvas};
    box-shadow: ${theme.boxShadow.dark};
    min-height: 100vh;
    position: relative;

    @media only screen and (max-width: 800px) {
      max-width: 100%;
      border-radius: 0;
      box-shadow: none;
    }

    .main {
      ${!emptyCanvas &&
      css`
        padding: ${theme.padding.main};
      `}
    }
  `,
);
