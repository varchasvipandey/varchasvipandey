import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../themes/interface';

export const Container = styled.div(
  () => css`
    overflow-x: auto;
    display: flex;
    align-items: center;

    &::-webkit-scrollbar {
      display: none;
    }

    &:hover > img:not(:hover) {
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
