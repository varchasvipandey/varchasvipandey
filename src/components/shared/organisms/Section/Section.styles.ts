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

    @media only screen and (max-width: ${theme.breakpoints.desktop}) {
      padding: 0 6.4rem;
    }
    @media only screen and (max-width: ${theme.breakpoints.tabletLS}) {
      padding: 0 5.6rem;
    }
    @media only screen and (max-width: ${theme.breakpoints.tabletPT}) {
      padding: 0rem;
      .content {
        box-shadow: none;
        margin-top: 0;
      }
    }
    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    }
  `,
  { ...style },
]);
