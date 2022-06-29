/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

import Title from '../../utils/article/Title';
import BgRectRight from '../../utils/bgRect/Right';
import ButtomButton from '../../utils/article/ButtomButton';

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
      <BgRectRight />

      <Articles>
        <Title
          title="TOP ARTICLES"
          underLineWidth="400"
        />

        <div tw="flex mt-20 justify-center">
          <CardWrapper>{props.children}</CardWrapper>
        </div>
        
        <div tw="mt-20 mb-10">
          <ButtomButton text="MORE" />
        </div>
      </Articles>
    </TopArticleWrapper>
  );
};

const TopArticleWrapper = tw.div`
  flex justify-center relative
`;

const Articles = tw.div`
  w-full container bg-accent rounded z-10 my-20
`;

// TODO: レスポンシブ対応
const CardWrapper = tw.div`
  grid grid-cols-3 gap-x-16
`;

export default TopArticle;
