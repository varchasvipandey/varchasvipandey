import Container from './Navbar.styles';
import React from 'react';

interface NavbarProps {
  handleMenuToggle: React.MouseEventHandler<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ handleMenuToggle }) => {
  return (
    <Container>
      <div className="action" onClick={handleMenuToggle}>
        {/* 🧐 */}
        🦚
      </div>
    </Container>
  );
};

export default Navbar;
