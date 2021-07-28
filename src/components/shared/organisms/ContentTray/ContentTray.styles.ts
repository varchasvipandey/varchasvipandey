import styled, { css } from 'styled-components';

export default styled.div(
  () => css`
    display: flex;
    align-items: center;
    overflow-x: auto;
    padding: 1.2rem 0;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
);
