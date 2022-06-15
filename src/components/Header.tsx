import React from 'react';
import { Link } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

const Header = () => {
  return (
    <HeaderWarraper>
      <Link to="/index/">
        <img src="/logo/rn-hack-header-logo.svg" alt="header-title" tw="h-8 ml-12 align-middle" />
      </Link>
    </HeaderWarraper>
  );
};

const HeaderWarraper = tw.div`
  h-12
`;

export default Header;
