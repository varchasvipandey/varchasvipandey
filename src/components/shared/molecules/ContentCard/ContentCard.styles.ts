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

    .image {
      flex: 1;
      overflow: hidden;
      border-radius: ${theme.borderRadius.card} ${theme.borderRadius.card} 0 0;
      img {
        width: 100%;
      }
    }

    .title {
      flex: 0 0 25%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  { ...styles },
]);
