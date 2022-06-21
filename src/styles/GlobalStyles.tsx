import React from 'react';
import { Global, css } from '@emotion/react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
  body {
    ${tw`antialiased`}
    ${tw`font-body`}
    ${tw`font-normal`}
    ${tw`text-secondary`}
    ${tw`bg-background`}
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={customStyles} />
    </>
  );
};

export default GlobalStyles;
