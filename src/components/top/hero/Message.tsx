/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import 'twin.macro';
import tw from 'twin.macro';

/**
 * Heroで使用するMessage部分
 * 親要素にrelativeの指定が必要
 * @returns JSX.Element
 */
const Message = () => {
  return (
    <MessageWrapper>
      <p css={messageText}>
        <span tw="text-accent">ALWAYS</span> LEARN NEW THINGS.
      </p>
      <p css={messageText}>
        <span tw="text-accent">HACK</span> EVERYTHING.
      </p>
    </MessageWrapper>
  );
};

const MessageWrapper = tw.div`
  absolute bottom-4 right-0 py-2 z-10
`;

const messageText = css`
  ${tw`text-right leading-snug`}
  font-size: clamp(3rem, 6vh, 5rem);
`;

export default Message;
