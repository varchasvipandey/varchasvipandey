import React from 'react';
import { Container, Option } from './Menu.style';

interface MenuProps {
  handleMenuToggle: Function;
  menuOn: boolean;
}

const MENU_ITEMS = [
  { label: 'About Me', href: '#about-me' },
  { label: 'Content for Devs', href: '#community-content' },
  { label: 'Side projects', href: '#side-projects' },
  { label: 'Utility projects', href: '#utility-projects' },
  { label: 'Tech stack', href: '#tech-stack' },
  { label: 'Entertainment', href: '#get-entertained' },
  { label: 'Connect', href: '#connect' },
];

const Menu: React.FC<MenuProps> = ({ handleMenuToggle, menuOn }) => {
  return (
    <Container style={!menuOn ? { animation: 'fadeOut 1s' } : {}}>
      <div className="container">
        {/* Close icon */}
        <div className="close">
          <img src="./assets/corss-outline-white.svg" alt="" onClick={() => handleMenuToggle()} />
        </div>

        {/* Options */}
        <div className="options">
          {MENU_ITEMS.map((option, i: number) => (
            <Option
              key={i}
              href={option.href}
              animationDelay={i + 1}
              onClick={() => handleMenuToggle()}
            >
              {option.label}
            </Option>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Menu;
