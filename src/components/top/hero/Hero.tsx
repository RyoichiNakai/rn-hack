import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import Scroll from './Scroll';
import Message from './Message';

/**
 * Heroコンポーネント
 * @returns JSX.Element
 */
const Hero = () => {
  return (
    <HeroWrapper>
      <MainVisual>
        <img
          tw="w-full h-full object-cover"
          src="/hero/hero-main.png"
          alt="main-visual"
        />
      </MainVisual>

      <Rectangle />

      <Scroll />

      <Message />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  ${tw`relative overflow-hidden`}
  width: calc(100vw - 1rem);
  height: calc(100vh - 5rem);
`;

const MainVisual = tw.div`
  absolute top-0 left-0 w-[80%] h-[79%] rounded-r-hero overflow-hidden z-10
`;

const Rectangle = tw.div`
  absolute top-[5.8%] left-0 bottom-0 w-[88%] bg-primary rounded-r-hero
`;

export default Hero;
