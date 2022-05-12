import React from 'react';
import '../styles/global.scss';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
