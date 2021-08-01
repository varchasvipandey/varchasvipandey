import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

interface SectionContainerProps extends StyledComponentProps {
  flatBody?: boolean;
}

export default styled.section(({ theme, style, flatBody = false }: SectionContainerProps) => [
  css`
    margin: 20rem 0;
    padding: 0 7.2rem;

    .heading {
      text-align: center;
    }

    .content {
      margin-top: 4rem;
      padding: 4rem 2rem;

      ${!flatBody &&
      css`
        box-shadow: ${theme.boxShadow.light};
        border-radius: ${theme.borderRadius.section};
      `}

      .list {
        margin-top: 3.6rem;
      }
    }
  `,
  { ...style },
]);
