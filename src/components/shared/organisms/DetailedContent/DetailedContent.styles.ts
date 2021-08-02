import styled, { css } from 'styled-components';
import * as CSS from 'csstype';

interface DetailsContentStylesProps {
  style?: CSS.Properties;
}

export default styled.section(({ style }: DetailsContentStylesProps) => [
  css`
    display: flex;
    align-items: flex-start;

    .content-info {
      p:first-of-type {
        margin: 2rem 0;
      }
    }
  `,
  { ...style },
]);
