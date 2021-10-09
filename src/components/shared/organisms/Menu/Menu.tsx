import React from 'react';
import { Container, Option } from './Menu.style';

interface MenuProps {
  handleMenuToggle: Function;
  menuOn: boolean;
  handleThemeSwitch: Function;
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
  // const [swappedTheme, setSwappedTheme] = React.useState<boolean>(false);

  /*   const handleThemeSwitchWithAnimation = (): void => {
    handleThemeSwitch();
    setSwappedTheme((prev) => !prev);
  }; */

  return (
    <Container style={!menuOn ? { animation: 'fadeOut 1s' } : {}}>
      <div className="container">
        <div className="actions">
          {/* Themes */}
          <div className="actions__theme-switch" /* onClick={handleThemeSwitchWithAnimation} */>
            {/* <img
              src="./assets/theme-swapped.svg"
              alt="default theme"
              loading="lazy"
              style={swappedTheme ? { transform: 'rotate(180deg)' } : {}}
            /> */}
          </div>

          {/* Close icon */}
          <div className="actions__close" onClick={() => handleMenuToggle()}>
            <img src="./assets/corss-outline-white.svg" alt="close" loading="lazy" />
          </div>
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
