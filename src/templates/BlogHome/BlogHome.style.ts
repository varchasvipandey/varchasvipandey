import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../themes/interface';

const Container = styled.main(
  ({ theme }: StyledComponentProps) => css`
    padding: 4rem;

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 2rem;
    }

    .blogs-list {
      margin: 8rem 0;
    }
  `,
);

export default Container;
