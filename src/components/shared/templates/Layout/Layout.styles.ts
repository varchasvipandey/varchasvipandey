import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.main(
  ({ theme }: StyledComponentProps) => css`
    max-width: ${theme.maxWidth};
    margin: 0 auto;
    background-color: ${theme.colors.background};
    border-radius: ${theme.borderRadius.canvas};
    min-height: 100vh;

    @media only screen and (max-width: 800px) {
      max-width: 100%;
      border-radius: 0;
    }

    .main {
      padding: ${theme.padding.main};
    }
  `,
);
