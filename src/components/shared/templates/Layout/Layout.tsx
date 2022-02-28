import Container from './Layout.styles';
import { Navbar, Footer, Menu } from '../..';
import GlobalStyle from '../../../../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { getSelectedTheme, selectNextTheme } from '../../../../utils/themeHandler';
import { Theme } from '../../../../themes/interface';

import React from 'react';

import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  emptyCanvas?: boolean;
  image?: string;
  keywords?: string; // coma separated
  url?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  emptyCanvas = false,
  image,
  keywords,
  url,
}) => {
  const [menuOn, setMenuOn] = React.useState<boolean>(false);
  const [mountMenu, setMountMenu] = React.useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = React.useState<Theme>(getSelectedTheme());

  // -- Handle menu toggle
  const handleMenuToggle = (): void => {
    setMenuOn((prev: boolean) => {
      if (prev === true) {
        // perform delayed unmount for animation
        setTimeout(() => {
          setMountMenu(false);
        }, 1000);
      } else {
        setMountMenu(true);
      }
      return !prev;
    });
  };

  const handleThemeSwitch = (): void => {
    const nextTheme = selectNextTheme();
    setSelectedTheme(nextTheme);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Helmet>
        {/* Page title */}
        <title>{title || 'Varchasvi Pandey - Web application designer & developer'}</title>
        <meta name="theme-color" content="#8775ed" />
        <meta name="description" content={description || ''} />
        <meta
          name="keywords"
          content={
            keywords ||
            'web developer, frontend developer, designer, varchasvi, ui, ux, graphics designer'
          }
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url || 'https://varchasvipandey.com'} />
        <meta
          name="twitter:title"
          content={title || 'Varchasvi Pandey - Web application designer & developer'}
        />
        <meta name="twitter:description" content={description || ''} />

        {/*  Open graph */}
        <meta
          property="og:image"
          content={image || 'https://varchasvipandey.com/profile-512x512.png'}
        />
        <meta
          property="og:title"
          content={title || 'Varchasvi Pandey - Web application designer & developer'}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content={title || 'Varchasvi Pandey - Web application designer & developer'}
        />
        <meta property="og:description" content={description || ''} />
      </Helmet>
      <Container emptyCanvas={emptyCanvas}>
        <Navbar handleMenuToggle={handleMenuToggle} />
        {mountMenu && (
          <Menu
            handleMenuToggle={handleMenuToggle}
            menuOn={menuOn}
            handleThemeSwitch={handleThemeSwitch}
          />
        )}
        <div className="main">{children}</div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
