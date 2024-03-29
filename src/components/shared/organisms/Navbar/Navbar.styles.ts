import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.nav(
  ({ theme }: StyledComponentProps) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;

    padding: ${theme.padding.main};

    .action {
      position: fixed;
      top: 1.2rem;
      right: 2rem;
      font-size: 2.4rem;
      border-radius: 50%;
      padding: 2px;
      box-shadow: ${theme.boxShadow.normal};
      cursor: pointer;
      transition: all 0.2s;
      opacity: 0;
      animation: popIn 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      z-index: 1;

      &::after {
        content: 'Let me help you!';
        opacity: 0;
        position: absolute;
        width: 10rem;
        background-color: ${theme.colors.text.sectionHeading};
        left: 50%;
        top: 50%;
        transform: translate(-110%, -50%);
        text-align: center;
        font-size: 1rem;
        padding: 0.4rem 0.6rem;
        color: ${theme.colors.background};
        transition: all 0.4s cubic-bezier(1, 0.06, 0.43, -0.03);
      }

      &:hover::after {
        opacity: 0.6;
        left: 0;
      }
    }

    @keyframes popIn {
      0% {
        opacity: 0;
        transform: scale(0) rotate(0deg);
      }
      70% {
        opacity: 1;
        transform: scale(1.2) rotate(360deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(360deg);
      }
    }
  `,
);
