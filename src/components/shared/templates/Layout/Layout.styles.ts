import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.main(
  ({ theme }: StyledComponentProps) => css`
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
      padding: ${theme.padding.main};
    }
  `,
);
