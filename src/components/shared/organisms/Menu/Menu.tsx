import React, { useState } from 'react';
import { Container, Option } from './Menu.style';
import { Link } from 'gatsby';
import { CrossIcon } from '../../../../icons';
import { useTheme } from 'styled-components';
import { Theme } from '../../../../themes';

interface MenuProps {
  handleMenuToggle: Function;
  menuOn: boolean;
  handleThemeSwitch: Function;
}

const MENU_ITEMS = [
  {
    label: 'Home',
    href: '/',
    subMemuItems: [
      { label: 'About Me', href: '/#about-me' },
      { label: 'Content for Devs', href: '/#community-content' },
      { label: 'Side projects', href: '/#side-projects' },
      { label: 'Utility projects', href: '/#utility-projects' },
      { label: 'Tech stack', href: '/#tech-stack' },
      { label: 'Entertainment', href: '/#get-entertained' },
      { label: 'Connect', href: '/#connect' },
    ],
  },
  { label: 'Blog', href: '/blog', subMemuItems: [] },
];

const Menu: React.FC<MenuProps> = ({ handleMenuToggle, menuOn, handleThemeSwitch }) => {
  //@ts-ignore
  const theme: Theme = useTheme();
  const [swappedTheme, setSwappedTheme] = React.useState<boolean>(false);

  const handleThemeSwitchWithAnimation = (disabled?: boolean): void => {
    if (disabled) return;
    handleThemeSwitch();
    setSwappedTheme((prev) => !prev);
  };

  const [activeTab, setActiveTab] = useState<string>('/');

  return (
    <Container style={!menuOn ? { animation: 'fadeOut 1s' } : {}}>
      <div className="container">
        <div className="actions">
          {/* Themes */}
          <div
            className="actions__theme-switch"
            onClick={() => handleThemeSwitchWithAnimation(true)}
            style={{ opacity: '0.2', cursor: 'not-allowed' }}
          >
            <img
              src="./assets/theme-swapped.svg"
              alt="default theme"
              loading="lazy"
              style={swappedTheme ? { transform: 'rotate(180deg)' } : {}}
            />
          </div>

          {/* Close icon */}
          <div className="actions__close" onClick={() => handleMenuToggle()}>
            <CrossIcon style={{ width: '4rem', color: theme?.colors?.text?.menu }} />
          </div>
        </div>

        {/* Options */}
        <div className="options">
          {MENU_ITEMS.map((option, i: number) => (
            <Link key={i} to={option.href} style={{ textDecoration: 'none' }}>
              <Option
                animationDelay={i + 1}
                onClick={() => handleMenuToggle()}
                onMouseEnter={() => setActiveTab(option.href)}
              >
                {option.label}
              </Option>
            </Link>
          ))}
        </div>

        {/* Sub menu items */}
        <div className="sub-menu">
          {MENU_ITEMS.filter((item) => item.href === activeTab)[0]?.subMemuItems.map(
            (subItem, i: number) => (
              <Link key={i} to={subItem.href} style={{ textDecoration: 'none' }}>
                <Option childItem animationDelay={i + 1} onClick={() => handleMenuToggle()}>
                  {subItem.label}
                </Option>
              </Link>
            ),
          )}
        </div>
      </div>
    </Container>
  );
};

export default Menu;
