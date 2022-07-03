import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

import IconButton from '../utils/IconButton';
import { menus } from '../../utils/nav/menuBar';

const Footer = () => {
  const navLists = menus.map((menu, index) => {
    return (
      <NavList
        key={index}
        tw="last:pr-0"
      >
        {menu.text}
      </NavList>
    );
  });

  const iconButtonLists = [];

  return (
    <FooterWrapper>
      <FooterContentWrapper tw="mt-8">
        <div>
          <div tw="flex justify-center">
            <img
              src="/logo/rn-hack-footer-logo.svg"
              alt="rn-hack"
              height="62px"
            />
          </div>
          <nav tw="mt-6">
            <ul tw="flex justify-center">{navLists}</ul>
          </nav>
          <IconButtonWrapper tw="mt-4">
            <IconButton isDark={false} />
            <IconButton isDark={false} />
            <IconButton isDark={false} />
            <IconButton isDark={false} />
          </IconButtonWrapper>
        </div>
      </FooterContentWrapper>

      <CopyrightButton>copyright</CopyrightButton>
    </FooterWrapper>
  );
};

const FooterWrapper = tw.footer`
  h-[280px] flex flex-col justify-end bg-primary rounded-tr
`;

const FooterContentWrapper = tw.div`
  flex justify-center items-center flex-1
`;

const NavList = tw.li`
  pr-4 text-2xl text-accent
`;

const IconButtonWrapper = tw.div`
  flex justify-center
`;

const CopyrightButton = tw.button`
  mb-4 text-accent
`;

export default Footer;
