/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import 'twin.macro';
import tw from 'twin.macro';

type TitleProps = {
  title: string;
  underLineWidth: string;
};

const Title = (props: TitleProps) => {
  const title = css`
    ${tw`text-center pt-20 text-4xl relative`}
    &::after {
      ${tw`bg-primary`}
      content: '';
      width: ${props.underLineWidth}px;
      height: 3px;
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 2px;
      transform: translateX(-50%);
    }
  `;

  return (
    <div css={title}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Title;
