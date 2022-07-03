import React from 'react';
import styled from '@emotion/styled';
import 'twin.macro';
import tw from 'twin.macro';

import { ARTICLES_TOC_MAX_DEPTH } from '../../utils/article/html';

type ToCProps = {
  headings: GatsbyTypes.Maybe<
    readonly GatsbyTypes.Maybe<
      Pick<GatsbyTypes.MarkdownHeading, 'value' | 'depth'>
    >[]
  >;
};

/**
 * ToCを作成
 * リンクはheadingのvalueと同じとする
 */
const ToC = (props: ToCProps) => {
  return (
    <div tw="flex flex-col justify-center text-accent p-8 bg-primary rounded">
      <div tw="flex justify-center">
        <h2 tw="text-2xl">OUTLINE</h2>
      </div>
      <div>
        <ul>
          {props.headings &&
            props.headings.map((head, index) => {
              const headDepth = head?.depth as number;
              if (headDepth <= ARTICLES_TOC_MAX_DEPTH && headDepth != 1) {
                return (
                  <TocList
                    key={index}
                    depth={headDepth}
                  >
                    <a href={`#${head?.value}`}>{head?.value}</a>
                  </TocList>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

/**
 * 目次の左側にパディングを入れる
 * h2の場合は、0
 * h3の場合は、1rem
 */
const TocList = styled.li<{ depth: number }>`
  padding-left: ${({ depth }) => (depth === 2 ? 0 : 1)}rem;
  ${tw`hover:font-bold`}
`;

export default ToC;
