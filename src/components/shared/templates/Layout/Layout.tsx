import Container from './Layout.styles';
import { Navbar, Footer, Menu } from '../..';
import GlobalStyle from '../../../../styles/GlobalStyle';
import { pianoKeys } from '../../../../themes';
import { ThemeProvider } from 'styled-components';

import React from 'react';

import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const [menuOn, setMenuOn] = React.useState<boolean>(false);
  const [mountMenu, setMountMenu] = React.useState<boolean>(false);

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

  return (
    <ThemeProvider theme={pianoKeys}>
      <GlobalStyle />
      <Helmet>
        {/* Page title */}
        <title>{title || 'Varchasvi Pandey - Web designer & developer'}</title>
        <meta name="description" content={description || ''} />
      </Helmet>
      <Container>
        <Navbar handleMenuToggle={handleMenuToggle} />
        {mountMenu && <Menu handleMenuToggle={handleMenuToggle} menuOn={menuOn} />}
        <div className="main">{children}</div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
