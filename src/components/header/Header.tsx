import React from 'react';
import { Link } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

import { menus } from '../../utils/nav/menuBar';

const Header = () => {
  const navLists = menus.map((menu, index) => {
    return <NavList key={index}>{menu.text}</NavList>;
  });

  return (
    <HeaderWarraper>
      <Logo>
        <Link to="/">
          <img
            src="/logo/rn-hack-header-logo.svg"
            alt="header-title"
            width="224px"
          />
        </Link>
      </Logo>

      <nav>
        <ul>{navLists}</ul>
      </nav>
    </HeaderWarraper>
  );
};

const HeaderWarraper = tw.header`
  flex w-full h-20 justify-between items-center sticky z-50
`;

const Logo = tw.div`
  ml-12
`;

const NavList = tw.li`
  inline pr-4 text-2xl
`;

export default Header;
