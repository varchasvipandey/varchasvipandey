import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../themes/interface';

interface BlogContainer extends StyledComponentProps {
  thumbnail: string;
}

const Container = styled.main(
  ({ theme, thumbnail }: BlogContainer) => css`
    .header {
      height: 20rem;
      background: linear-gradient(to top, rgb(0, 0, 0), transparent),
        url(${thumbnail}) center center / cover no-repeat;

      border-radius: 2rem 2rem 0px 0px;

      @media only screen and (max-width: 800px) {
        border-radius: 0;
      }

      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      padding: 2rem;

      &__title {
        color: ${theme.colors.section};
      }
    }

    .meta-action {
      margin: 2rem 4rem 3.2rem 4rem;

      @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin: 2rem 2rem 3.2rem 2rem;
      }

      display: flex;
      align-items: center;
      justify-content: space-between;

      &__date {
        font-size: 1.2rem;
        font-weight: 600;
      }

      &__actions {
      }
    }

    .body {
      margin: 2rem 4rem;

      @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin: 2rem;
      }

      p {
        font-size: ${theme.fonts.sectionText.size};
        font-weight: ${theme.fonts.sectionText.weight};
        color: ${theme.colors.text.sectionText};
        line-height: ${theme.lineHeight.paragraph};
        margin: 2rem 0;

        strong {
          font-size: ${theme.fonts.sectionSubHeading.size} !important;
          font-weight: ${theme.fonts.sectionSubHeading.weight} !important;
          color: ${theme.colors.text.sectionSubHeading} !important;
          color: ${theme.colors.primaryDark} !important;
        }
      }

      blockquote {
        font-size: ${theme.fonts.sectionText.size};
        font-weight: ${theme.fonts.sectionText.weight};
        color: ${theme.colors.text.sectionText};
        line-height: ${theme.lineHeight.paragraph};
        margin: 2rem 0;
        background: #eee;
        padding: 1.2rem;
      }

      figure {
        text-align: center;
        margin: 4rem 0;
        img {
          width: 100%;
          max-width: 600px;
        }
      }
    }

    .footer {
      margin: 2rem 4rem;
      display: flex;
      justify-content: flex-end;

      @media only screen and (max-width: ${theme.breakpoints.mobile}) {
        margin: 2rem;
      }
    }
  `,
);

export default Container;
