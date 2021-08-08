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
        <title>{title || 'Varchasvi Pandey - Web application designer & developer'}</title>
        <meta name="theme-color" content="#8775ed" />
        <meta name="description" content={description || ''} />
        <meta
          name="keywords"
          content="web developer, frontend developer, designer, varchasvi, ui, ux, graphics designer"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://varchasvipandey.com" />
        <meta
          name="twitter:title"
          content={title || 'Varchasvi Pandey - Web application designer & developer'}
        />
        <meta name="twitter:description" content={description || ''} />

        {/*  Open graph */}
        <meta property="og:image" content="https://varchasvipandey.com/profile-512x512.png" />
        <meta
          property="og:title"
          content={title || 'Varchasvi Pandey - Web application designer & developer'}
        />
        <meta property="og:type" content="profile" />
        <meta
          property="og:site_name"
          content="Varchasvi Pandey - Web application designer & developer"
        />
        <meta property="og:description" content={description || ''} />
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
