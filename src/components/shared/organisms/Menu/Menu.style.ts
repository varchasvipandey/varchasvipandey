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

      .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__theme-switch {
          user-select: none;
          img {
            opacity: 0;
            width: 3.2rem;
            cursor: pointer;
            animation: fadeIn 2s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            transition: all 0.3s;
          }
        }

        &__close {
          display: flex;
          justify-content: flex-end;
          user-select: none;
          img {
            width: 2.4rem;
            transform: translateX(200%) rotate(360deg) scale(0.8);
            animation: rotateAndEnter 0.5s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
            cursor: pointer;
          }
        }
      }

      /* Options container */
      .options {
        max-width: ${theme.maxWidth};
        margin: 0 auto;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
      }

      /* Sub menu */
      .sub-menu {
        max-width: ${theme.maxWidth};
        margin: 0 auto;
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 100%;
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
  childItem?: boolean;
}

export const Option = styled.p(
  ({ theme, animationDelay, childItem }: OptionProps) => css`
    font-size: ${theme.fonts.sectionHeading.size};
    color: ${theme.colors.text.menu};
    margin-top: 2.4rem;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 300;
    margin: 0 2rem;

    opacity: 0;
    transform: scale(0);
    animation: appearIn 0.4s;
    animation-delay: ${0.5 + animationDelay / 5 + 's'};
    animation-fill-mode: forwards;

    position: relative;

    ${childItem &&
    css`
      font-size: ${theme.fonts.sectionSubHeading.size};
      margin-bottom: 2rem;
      animation-delay: ${0.1 + animationDelay / 5 + 's'};
    `}

    &::before {
      content: '';
      position: absolute;
      opacity: 0;
      width: 0%;
      height: 2px;
      background-color: ${theme.colors.text.menu};
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
