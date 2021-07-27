import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';

export const Title = styled.h1(
  ({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fonts.title.size};
    font-weight: ${theme.fonts.title.weight};
    color: ${theme.colors.text.title};
  `,
);

export const SectionHeading = styled.p(
  ({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fonts.sectionHeading.size};
    font-weight: ${theme.fonts.sectionHeading.weight};
    color: ${theme.colors.text.sectionHeading};
  `,
);

export const Text = styled.p(
  ({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fonts.sectionText.size};
    font-weight: ${theme.fonts.sectionText.weight};
    color: ${theme.colors.text.sectionText};
    line-height: ${theme.lineHeight.paragraph};
  `,
);
