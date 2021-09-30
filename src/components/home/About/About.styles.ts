import { StyledComponentProps } from '../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }: StyledComponentProps) => css`
    .brand {
      color: ${theme.colors.primary};
    }

    .company-profile {
      text-align: center;
      margin-bottom: 4.8rem;
      img {
        width: 400px;
        border-radius: 10px;
        box-shadow: ${theme.boxShadow.dark};
        @media only screen and (max-width: ${theme.breakpoints.tabletLS}) {
          flex-direction: column-reverse;
          width: 100%;
        }
      }
    }

    .cta {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3.2rem;

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
