import { StyledComponentProps } from '../../../themes/interface';
import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }: StyledComponentProps) => css`
    .brand {
      color: ${theme.colors.primary};
    }

    .cta {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 3.2rem;

      button {
        margin: 0 1.2rem;
      }

      .brand-logo {
        margin-right: 1rem;
        img {
          width: 3.2rem;
        }
      }
    }
  `,
);
