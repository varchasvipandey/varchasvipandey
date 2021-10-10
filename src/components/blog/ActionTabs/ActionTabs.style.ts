import styled, { css } from 'styled-components';
import { StyledComponentProps } from '../../../themes/interface';

interface ActionItemContainerProps extends StyledComponentProps {
  tooltip?: string;
}

export const Container = styled.div(
  () => css`
    display: inline;
    display: flex;
  `,
);

export const ActionItemContainer = styled.div(
  ({ theme, tooltip }: ActionItemContainerProps) => css`
    padding: 4px;
    box-shadow: ${theme.boxShadow.light};
    border-radius: 50%;
    margin-left: 2rem;
    transition: all 0.2s;
    position: relative;

    &::after {
      content: '${tooltip}';
      position: absolute;
      width: 10rem;
      overflow: hidden;
      top: -3.2rem;
      left: -12rem;
      min-height: 2rem;
      display: flex;
      align-items: center;
      background-color: ${theme.colors.section};
      z-index: 1;
      font-size: ${theme.fonts.mutedText.size};
      font-weight: ${theme.fonts.mutedText.weight};
      box-shadow: ${theme.boxShadow.light};
      border-radius: 4px;
      padding: 0.4rem 0.8rem;
      display: none;
    }

    &:hover {
      cursor: pointer;
      box-shadow: ${theme.boxShadow.normal};
      &::after {
        display: block;
      }
    }

    &:active {
      box-shadow: ${theme.boxShadow.light};
      &::after {
        display: none;
      }
    }
  `,
);
