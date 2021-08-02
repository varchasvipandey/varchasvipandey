import React from 'react';
import Container from './Menu.style';

interface MenuProps {
  handleMenuToggle: React.MouseEventHandler<HTMLImageElement>;
}

const Menu: React.FC<MenuProps> = ({ handleMenuToggle }) => {
  return (
    <Container>
      <div className="container">
        {/* Close icon */}
        <div className="close">
          <img src="./corss-outline-white.svg" alt="" onClick={handleMenuToggle} />
        </div>
      </div>
    </Container>
  );
};

export default Menu;
