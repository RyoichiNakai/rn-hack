import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

/**
 * 親要素のcssはrelativeにする
 * @returns 
 */
const BgRectRight = () => {
  return <Content />
}

const Content = tw.div`
  absolute right-0 top-0 w-[34.3%] h-[280px] bg-primary rounded-l
`;

export default BgRectRight
