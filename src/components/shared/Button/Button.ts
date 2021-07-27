import { StyledComponentProps } from '../../../themes/interface';
import styled, { css } from 'styled-components';

interface ButtonProps extends StyledComponentProps {
  variant: 'primary' | 'secondary';
}

export const Button = styled.button(
  ({ theme, variant = 'primary' }: ButtonProps) => css`
    font-size: ${theme.fonts.sectionText.size};
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    ${variant === 'primary' &&
      css`
        font-weight: ${theme.fonts.sectionText.weight};
        color: ${theme.colors.text.sectionText};
        padding: 1.2rem 2rem;
        box-shadow: ${theme.boxShadow.normal};
        border-radius: ${theme.borderRadius.button};

        &:hover {
          box-shadow: ${theme.boxShadow.dark};
        }
      `};

    ${variant === 'secondary' &&
      css`
        font-weight: ${theme.fonts.sectionText.weight};
        color: ${theme.colors.primary};
        text-decoration: underline;

        &:hover {
          color: ${theme.colors.primaryDark};
        }
      `};

    &:hover {
      cursor: pointer;
    }
  `,
);
