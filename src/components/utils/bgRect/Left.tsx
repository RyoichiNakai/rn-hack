import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

/**
 * 親要素のcssはrelativeにする
 * @returns 
 */
const BgRectLeft = () => {
  return <Content />
}

const Content = tw.div`
  absolute left-0 top-0 w-[34.3%] h-[280px] bg-primary rounded-r
`;

export default BgRectLeft
