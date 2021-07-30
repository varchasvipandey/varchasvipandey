import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../themes/interface';

export const Container = styled.div(
  () => css`
    overflow-x: scroll;
    display: flex;
    align-items: center;

    -ms-overflow-style: none;
    white-space: nowrap;

    .image-container {
      width: 12rem;
      height: 12rem;
      padding: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &:hover > div:not(:hover) {
      transform: scale(0.8);
      opacity: 0.6;
    }
  `,
);

export const Image = styled.img(
  ({ theme }: StyledComponentProps) => css`
    flex-shrink: 0;
    width: 8rem;
    margin-right: 4rem;
    cursor: pointer;
    filter: drop-shadow(${theme.boxShadow.light});
    transition: all 0.2s;
  `,
);
