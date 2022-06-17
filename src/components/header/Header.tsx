import React from 'react';
import { Link } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

const Header = () => {
  return (
    <HeaderWarraper>
      <Logo>
        <Link to="/">
          <img
            src="/logo/rn-hack-header-logo.svg"
            alt="header-title"
          />
        </Link>
      </Logo>

      <nav>
        <ul>
          <NavList>ABOUT</NavList>
          <NavList>DEVELOPMENT</NavList>
        </ul>
      </nav>
    </HeaderWarraper>
  );
};

const HeaderWarraper = tw.div`
  flex h-20 justify-between items-center sticky w-screen z-50
`;

const Logo = tw.div`
  ml-12
`;

const NavList = tw.li`
  inline mr-4 text-2xl
`

export default Header;
