import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../../themes/interface';

export default styled.section(({ style, theme }: StyledComponentProps) => [
  css`
    display: flex;
    align-items: flex-start;

    @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
      flex-direction: column;
    }

    .content-card {
      @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      & > div {
        margin-right: 2rem;

        @media only screen and (max-width: ${theme.breakpoints.mobile}) {
          width: 100%;
          height: 24rem;
        }
      }
    }

    .content-info {
      p:first-of-type {
        margin: 2rem 0;
      }

      @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
        margin-top: 3.2rem;
      }
    }
  `,
  { ...style },
]);
