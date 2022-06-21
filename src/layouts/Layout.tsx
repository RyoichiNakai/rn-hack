import React, { ReactNode } from 'react';
import 'twin.macro';
import tw from 'twin.macro';

import GlobalStyles from '../styles/GlobalStyles';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
