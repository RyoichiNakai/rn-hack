import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.scss';

const Header = () => {
  return (
    <header>
      <Link to="/index/">RN Hack</Link>
    </header>
  );
};

export default Header;
