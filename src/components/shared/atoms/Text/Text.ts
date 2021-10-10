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

    @media only screen and (max-width: ${theme.breakpoints.mobileSlim}) {
      font-size: ${theme.fonts.sectionHeading.size};
    }
  `,
  { ...style },
]);

export const PageHeading = styled.h1(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.pageHeading.size};
    font-weight: ${theme.fonts.pageHeading.weight};
    color: ${theme.colors.text.title};

    @media only screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fonts.sectionHeading.size};
    }
  `,
  { ...style },
]);

export const SectionHeading = styled.h2(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.sectionHeading.size};
    font-weight: ${theme.fonts.sectionHeading.weight};
    color: ${theme.colors.text.sectionHeading};
    line-height: ${theme.lineHeight.heading};
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

export const LinkText = styled.p(({ theme, style }: CustomStyledComponents) => [
  css`
    font-size: ${theme.fonts.link.size};
    font-weight: ${theme.fonts.link.weight};
    color: ${theme.colors.text.link};
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
