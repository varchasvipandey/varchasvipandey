import '../../../styles/index.scss';
import Container from './Layout.styles';

import { Navbar } from '../';
import React from 'react';

import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Container>
      <Helmet>
        {/* Page title */}
        {!!title && <title>{title}</title>}
      </Helmet>
      <Navbar />
      <div className="main">{children}</div>
    </Container>
  );
};

export default Layout;
