/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

type TopArticleProps = {
  children: React.ReactNode;
};

/**
 * トップ画面の記事一覧のカードをラップするコンポーネント
 * @param props { children: ReactNode }
 * @returns
 */
const TopArticle = (props: TopArticleProps) => {
  return (
    <TopArticleWrapper>
      <BgRectangleRight />

      <Articles>
        <div css={title}>
          <h1>TOP ARTICLES</h1>
        </div>

        <CardWrapper>{props.children}</CardWrapper>

        <ButtonWrapper>
          <MoreButton>MORE</MoreButton>
        </ButtonWrapper>
      </Articles>
    </TopArticleWrapper>
  );
};

const TopArticleWrapper = tw.div`
  flex justify-center relative
`;

const BgRectangleRight = tw.div`
  absolute right-0 top-0 w-[34.3%] h-[280px] bg-primary rounded-l
`;

const Articles = tw.div`
  w-full max-w-[960px] bg-accent rounded z-10 mx-20 my-20
`;

const title = css`
  ${tw`text-center pt-20 text-5xl relative`}
  &::after {
    ${tw`bg-secondary`}
    content: '';
    width: 400px;
    height: 2px;
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 2px;
    transform: translateX(-50%);
  }
`;

const CardWrapper = tw.div`
  mt-20 mx-20 grid grid-cols-2 gap-x-[120px] gap-y-[70px]
`;

const ButtonWrapper = tw.div`
  mt-20 mb-10 w-full flex justify-center
`;

const MoreButton = tw.button`
  w-[200px] h-[40px] flex justify-center items-center bg-primary text-accent rounded-button
`;

export default TopArticle;