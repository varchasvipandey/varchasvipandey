import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

interface ButtonProps extends StyledComponentProps {
  variant: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = styled.button(
  ({ theme, variant = 'primary', disabled = false }: ButtonProps) => css`
    font-size: ${theme.fonts.sectionText.size};
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s;

    &:hover {
      cursor: pointer;
    }

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

      ${disabled &&
      css`
        color: ${theme.colors.text.mutedText};

        &:hover {
          color: ${theme.colors.text.mutedText};
          cursor: not-allowed;
        }
      `}
    `};
  `,
);
