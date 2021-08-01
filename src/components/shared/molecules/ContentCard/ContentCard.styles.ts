import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

interface ContentCardProps extends StyledComponentProps {
  styles?: object;
}

export default styled.div(({ theme, styles }: ContentCardProps) => [
  css`
    width: 24rem;
    height: 16rem;
    border-radius: ${theme.borderRadius.card};
    box-shadow: ${theme.boxShadow.light};
    flex-shrink: 0;

    display: flex;
    flex-direction: column;

    &:hover .image img {
      transform: scale(1.2);
    }

    .image {
      flex: 1;
      border-radius: ${theme.borderRadius.card} ${theme.borderRadius.card} 0 0;
      overflow: hidden;
      img {
        width: 100%;
        transition: transform 2s;
      }
    }

    .title {
      flex: 0 0 25%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.4rem 0.8rem;
    }
  `,
  { ...styles },
]);
