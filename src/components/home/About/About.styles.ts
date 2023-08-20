import { StyledComponentProps } from '../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    .highlights > p:first-of-type {
      font-weight: 600;
    }

    .brand {
      color: ${theme.colors.primary};
    }

    .cta {
      display: flex;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
        flex-direction: column-reverse;
      }

      button {
        margin: 0 1.2rem;
        @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
          &:first-of-type {
            margin-top: 3.2rem;
          }
        }

        @media only screen and (max-width: ${theme.breakpoints.mobile}) {
          width: 100%;
        }
      }

      .brand-logo {
        margin-right: 1rem;
        img {
          width: 3.2rem;
        }
      }
    }
  `,
);
