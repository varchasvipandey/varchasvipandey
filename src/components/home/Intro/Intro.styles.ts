import { StyledComponentProps } from '../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.section(
  ({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .intro-text {
      text-align: center;
      &__welcome {
        font-size: 2rem;
        font-weight: 400;
        opacity: 0.8;
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
      align-items: center;

      &__image {
        border-radius: 50%;
        img {
          border-radius: 50%;
          width: 12rem;
        }
        transform: translateX(2.4rem);
      }

      &__content {
        box-shadow: ${theme.boxShadow.light};
        padding: 4rem 4rem 4rem 8rem;
        border-radius: 8rem 2rem 2rem 8rem;
        transform: translateX(-2.4rem);
      }
    }
  `,
);
