import React, { ReactNode } from 'react';
import 'twin.macro';
import tw from 'twin.macro';

import Header from '../components/Header';
import GlobalStyles from '../styles/GlobalStyles'

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />

      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
