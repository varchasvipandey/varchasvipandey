import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
  () => css`
    position: relative;

    .nav-btn {
      position: absolute;
      top: 0%;
      height: 100%;
      width: 4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: all 0.2s;

      &__left {
        left: -2%;
        border-radius: 2rem 0 0 2rem;
      }

      &__right {
        right: -2%;
        border-radius: 0 2rem 2rem 0;
      }

      img {
        width: 3.2rem;
        opacity: 0.2;
        transition: all 0.2s;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }

      &:hover img {
        opacity: 0.4;
      }
    }
  `,
);

export const Container = styled.div(
  () => css`
    display: flex;
    align-items: center;
    overflow-x: auto;
    padding: 1.2rem 0;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
);
