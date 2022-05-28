import React from 'react';
import '../styles/global.scss';
import 'twin.macro';
import tw from 'twin.macro';

// Font
import '@fontsource/josefin-sans/400.css';
import '@fontsource/josefin-sans/500.css';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrrapeer>
      <Header />
      <main>{children}</main>
    </LayoutWrrapeer>
  );
};

const LayoutWrrapeer = tw.div`
`;

export default Layout;
