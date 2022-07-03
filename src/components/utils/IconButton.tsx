import React from 'react';
import styled from '@emotion/styled';
import 'twin.macro';
import tw from 'twin.macro';

type IconButtonProps = {
  isDark: boolean;
};

const IconButton = (props: IconButtonProps) => {
  const IconButtonWrapper = styled.button`
    ${tw`mr-6 last:mr-0 rounded-circle w-[40px] h-[40px]`}
    ${props.isDark ? tw`bg-secondary` : tw`bg-accent`}
  `;
  return <IconButtonWrapper />;
};

export default IconButton;