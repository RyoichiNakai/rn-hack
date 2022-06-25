/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/react';
import tw from 'twin.macro';

/**
 * Heroで使用するScroll部分
 * 親要素にrelativeの指定が必要
 * @returns JSX.Element
 */
const Scroll = () => {
  return (
    <ScrollWrapper>
      <span css={scrollText}>SCROLL</span>
    </ScrollWrapper>
  );
};

const scrollDown = keyframes`
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
`;

const ScrollWrapper = styled.div`
  ${tw`absolute left-16 bottom-0 h-[18%]`}

  &::before {
    ${tw`bg-accent`}
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 90%;
    animation: ${scrollDown} 3s cubic-bezier(1, 0, 0, 1) infinite;
  }

  // 気に食わないので一旦消しとく
  /* &::after {
    ${tw`bg-accent`}
    content: '';
    position: absolute;
    bottom: 1rem;
    left: 0.4em;
    width: 3px;
    height: 1.2rem;
    transform: skewX(-30deg);
  } */
`;

const scrollText = css`
  ${tw`text-accent tracking-wider`}
  font-size: clamp(1.5rem, 3vh, 2rem);
  position: absolute;
  left: -3rem;
  top: 0;
  writing-mode: vertical-rl;
`;

export default Scroll;
