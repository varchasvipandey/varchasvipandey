import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../themes/interface';

interface BlogCardContainerProps extends StyledComponentProps {
  thumbnail: string;
}

const Container = styled.section(
  ({ theme, thumbnail }: BlogCardContainerProps) => css`
    height: 32rem;
    margin: 4.8rem 0;
    border-radius: ${theme.borderRadius.card};
    box-shadow: ${theme.boxShadow.light};
    transition: all 0.2s;

    &:hover {
      cursor: pointer;
      box-shadow: ${theme.boxShadow.dark};
    }

    display: flex;
    flex-direction: row;

    .thumbnail {
      flex: 0 0 40%;
      /* background: linear-gradient(to top, rgb(0, 0, 0), transparent),
        url(${thumbnail}) center center / cover no-repeat; */
      border-radius: ${theme.borderRadius.card} 0 0 ${theme.borderRadius.card};

      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        flex-shrink: 0;
        min-width: 100%;
        min-height: 100%;
      }
    }

    .info {
      flex: 0 0 1;
      padding: 2rem;

      &__section {
        margin-bottom: 1.2rem;
      }

      &__header {
        &__date {
          margin-top: 1.2rem;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }

      &__action {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }

    @media only screen and (max-width: ${theme.breakpoints.tabletLS}) {
      flex-direction: column;
      height: 100%;
      .thumbnail {
        border-radius: ${theme.borderRadius.card} ${theme.borderRadius.card} 0 0;
        img {
          height: 20rem;
        }
      }
    }
  `,
);

export default Container;
