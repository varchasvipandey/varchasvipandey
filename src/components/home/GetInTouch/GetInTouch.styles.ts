import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../themes/interface';

export default styled.div(
  ({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (max-width: ${theme.breakpoints.desktop}) {
      justify-content: center;
      & > div {
        margin-right: 2.4rem;
        margin-left: 2.4rem;
      }
    }

    @media only screen and (max-width: ${theme.breakpoints.tabletLS}) {
      flex-direction: column;
      align-items: center;

      & > div {
        margin-right: 0;
        margin-left: 0;
      }
    }
  `,
);
