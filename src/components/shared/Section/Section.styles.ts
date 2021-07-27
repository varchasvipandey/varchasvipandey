import { StyledComponentProps } from '../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.section(
  ({ theme }: StyledComponentProps) => css`
    margin-top: 20rem;
    padding: 0 7.2rem;

    .heading {
      text-align: center;
    }

    .content {
      margin-top: 4rem;
      padding: 4rem 2rem;

      box-shadow: ${theme.boxShadow.light};
      border-radius: ${theme.borderRadius.section};
    }
  `,
);
