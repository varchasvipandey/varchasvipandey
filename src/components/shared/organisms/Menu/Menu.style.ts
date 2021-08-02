import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../../themes/interface';

export default styled.aside(
  ({ theme }: StyledComponentProps) => css`
    background-image: ${theme.gradients.primary};
    min-height: 100vh;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    animation: meltIn 1s;

    /* Main relative container */
    .container {
      position: relative;
      padding: ${theme.padding.menu};
      height: 100%;

      .close {
        display: flex;
        justify-content: flex-end;
        img {
          width: 2.4rem;
          transform: translateX(200%) rotate(360deg) scale(0.8);
          animation: rotateAndEnter 1s;
          animation-delay: 1s;
          animation-fill-mode: forwards;
        }
      }
    }

    @keyframes meltIn {
      0% {
        opacity: 0;
      }
    }

    @keyframes rotateAndEnter {
      0% {
        transform: translateX(200%) rotate(360deg) scale(0.8);
      }
      100% {
        transform: translateX(0%) rotate(0deg) scale(1);
      }
    }
  `,
);
