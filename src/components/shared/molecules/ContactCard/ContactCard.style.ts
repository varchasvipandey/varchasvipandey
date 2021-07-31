import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../../themes/interface';
import * as CSS from 'csstype';

interface ContactCardProps extends StyledComponentProps {
  style: CSS.Properties;
}

export default styled.div(({ theme, style }: ContactCardProps) => [
  css`
    width: 32rem;
    padding: ${theme.padding.main};
    border-radius: ${theme.borderRadius.card};
    box-shadow: ${theme.boxShadow.light};
    margin-bottom: 3.2rem;

    .link {
      text-decoration: none;

      display: flex;
      align-items: center;

      &__icon {
        margin-right: 1.2rem;
        img {
          width: 3.6rem;
        }
      }
    }
  `,
  { ...style },
]);
