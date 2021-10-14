import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../../themes/interface';

const Container = styled.div(({ theme, style }: StyledComponentProps) => [
  css`
    font-size: ${theme.fonts.mutedText.size};
    font-weight: ${theme.fonts.mutedText.weight};
    background-color: ${theme.colors.text.sectionSubHeading};
    color: ${theme.colors.section};

    position: fixed;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.6rem 3.2rem;
    border-radius: 8px;

    animation: popup 1s;
    animation-fill-mode: forwards;

    @keyframes popup {
      0% {
        bottom: 0%;
        opacity: 0;
      }
      20% {
        bottom: 2%;
        opacity: 1;
      }
      75% {
        bottom: 2%;
        opacity: 1;
      }
      80% {
        bottom: 3%;
        opacity: 1;
      }
      100% {
        bottom: 0%;
        opacity: 0;
      }
    }
  `,
  { ...style },
]);

export default Container;
