import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

type ButtomButtonProps = {
  text: string;
};

const ButtomButton = (props: ButtomButtonProps) => {
const ButtonWrapper = tw.div`
  w-full flex justify-center
`;

  const MoreButton = tw.button`
  w-[200px] h-[40px] flex justify-center items-center bg-primary text-accent rounded-button
`;

  return (
    <ButtonWrapper>
      <MoreButton>{props.text}</MoreButton>
    </ButtonWrapper>
  );
};

export default ButtomButton;
