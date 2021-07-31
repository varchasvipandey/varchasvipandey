import Container from './Layout.styles';
import { Navbar, Footer } from '../..';
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
  return (
    <ThemeProvider theme={pianoKeys}>
      <GlobalStyle />
      <Helmet>
        {/* Page title */}
        {!!title && <title>{title}</title>}
      </Helmet>
      <Container>
        <Navbar />
        <div className="main">{children}</div>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
