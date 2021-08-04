import React from 'react';
import { MutedText } from '../..';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  span {
    margin-left: 0.6rem;
    font-size: 1.6rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <MutedText>developed to share</MutedText> <span>💬</span>
    </Container>
  );
};

export default Footer;
