import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../../themes/interface';

export const Container = styled.aside(({ theme, style }: StyledComponentProps) => [
  css`
    background-image: ${theme.gradients.primary};
    min-height: 100vh;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    animation: meltIn 0.5s;

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
          animation: rotateAndEnter 0.5s;
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
          cursor: pointer;
        }
      }

      /* Options container */
      .options {
        max-width: ${theme.maxWidth};
        margin: 0 auto;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
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

    @keyframes fadeOut {
      100% {
        opacity: 0;
      }
    }
  `,
  { ...style },
]);

interface OptionProps extends StyledComponentProps {
  animationDelay: number;
}

export const Option = styled.a(
  ({ theme, animationDelay }: OptionProps) => css`
    text-decoration: none;
    font-size: ${theme.fonts.sectionHeading.size};
    color: ${theme.colors.background};
    margin-top: 2.4rem;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 300;

    opacity: 0;
    transform: scale(0);
    animation: appearIn 0.4s;
    animation-delay: ${0.5 + animationDelay / 5 + 's'};
    animation-fill-mode: forwards;

    position: relative;

    &::before {
      content: '';
      position: absolute;
      opacity: 0;
      width: 0%;
      height: 2px;
      background-color: ${theme.colors.background};
      bottom: -16%;
      transition: all 0.5s cubic-bezier(1, 0.06, 0.43, -0.03);
    }

    &:hover::before {
      width: 100%;
      opacity: 1;
    }

    @keyframes appearIn {
      0% {
        opacity: 0;
        transform: scale(0);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
);
