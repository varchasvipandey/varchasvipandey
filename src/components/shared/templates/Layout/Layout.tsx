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
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [menuOn, setMenuOn] = React.useState<boolean>(true);

  // -- Handle menu toggle
  const handleMenuToggle = (): void => {
    setMenuOn((prev: boolean) => !prev);
  };

  return (
    <ThemeProvider theme={pianoKeys}>
      <GlobalStyle />
      <Helmet>
        {/* Page title */}
        {!!title && <title>{title}</title>}
      </Helmet>
      <Container>
        <Navbar handleMenuToggle={handleMenuToggle} />
        {menuOn && <Menu handleMenuToggle={handleMenuToggle} />}
        <div className="main">{children}</div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
