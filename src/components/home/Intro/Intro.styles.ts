import { StyledComponentProps } from '../../../themes/interface';
import styled, { css } from 'styled-components';

interface Props extends StyledComponentProps {
  extendedintro: boolean;
}

export default styled.section(
  ({ theme, extendedintro }: Props) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .intro-text {
      text-align: center;
      padding-top: 2rem;
      &__welcome {
        font-size: 2rem;
        font-weight: 400;
        opacity: 0.8;
      }

      & > h1 {
        margin: 0.4rem 0;
      }

      &__profession {
        font-size: 2.2rem;
        font-weight: 400;
        opacity: 0.8;
      }
    }

    .intro-card {
      margin: 0 auto;
      margin-top: 8rem;
      width: 80%;
      display: flex;
      align-items: ${extendedintro ? 'start' : 'center'};
      transition: all 0.3s;

      @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
        align-items: center;
        flex-direction: column;
        width: 100%;
      }

      &__image {
        border-radius: 50%;
        transform: translateX(2.4rem);
        img {
          border-radius: 50%;
        }

        @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
          transform: translateX(0) translateY(2.4rem);
          img {
            width: 24rem;
          }
        }
      }

      &__content {
        box-shadow: ${theme.boxShadow.light};
        padding: 4rem 4rem 4rem 8rem;
        border-radius: 8rem 2rem 2rem 8rem;
        transform: translateX(-2.4rem);
        display: flex;
        flex-direction: column;
        gap: 2rem;

        @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
          border-radius: 2rem;
          padding: 2rem 2rem 0 2rem;
          transform: translateX(0);
          box-shadow: none;
          margin-top: 4.8rem;
        }
      }
    }
  `,
);
