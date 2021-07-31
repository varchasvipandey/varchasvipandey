import { StyledComponentProps } from '../../../../themes/interface';
import styled, { css } from 'styled-components';
import * as CSS from 'csstype';

interface CustomStyledComponents extends StyledComponentProps {
  style?: CSS.Properties;
}

export const Title = styled.h1(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.title.size};
    font-weight: ${theme.fonts.title.weight};
    color: ${theme.colors.text.title};
  `,
  { ...style },
]);

export const SectionHeading = styled.h2(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.sectionHeading.size};
    font-weight: ${theme.fonts.sectionHeading.weight};
    color: ${theme.colors.text.sectionHeading};
  `,
  { ...style },
]);

export const SectionSubHeading = styled.h3(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.sectionSubHeading.size};
    font-weight: ${theme.fonts.sectionSubHeading.weight};
    color: ${theme.colors.text.sectionSubHeading};
  `,
  { ...style },
]);

export const Text = styled.p(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.sectionText.size};
    font-weight: ${theme.fonts.sectionText.weight};
    color: ${theme.colors.text.sectionText};
    line-height: ${theme.lineHeight.paragraph};
  `,
  { ...style },
]);

export const MutedText = styled.p(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.mutedText.size};
    font-weight: ${theme.fonts.mutedText.weight};
    color: ${theme.colors.text.mutedText};
    line-height: ${theme.lineHeight.paragraph};
    font-style: italic;
  `,
  { ...style },
]);
