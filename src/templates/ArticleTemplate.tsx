/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

import Layout from '../layouts/Layout';
import BgRectLeft from '../components/utils/bgRect/Left';
import IconButton from '../components/utils/IconButton';

import ToC from '../components/article/Toc';

import { replaceHtml } from '../utils/article/html';
import { AboutConfig } from '../../pages/about';

const ArticleTemplate: React.FC<
  PageProps<GatsbyTypes.ArticleTemplateQuery>
> = ({ data }) => {
  const node = data.allContentfulArticle.edges[0].node;

  const replacedHtml = replaceHtml(
    node.body?.childMarkdownRemark?.headings,
    node.body?.childMarkdownRemark?.html
  );

  const categorySpans = node.category?.map((category, index) => {
    return (
      <span
        key={index}
        tw="mr-2 bg-primary rounded-badge text-accent p-2"
      >
        {category}
      </span>
    );
  });

  return (
    <Layout>
      <ArticleWrapper>
        <BgRectLeft />

        <Container>
          {/* 記事部分 */}
          <div tw="col-span-3">
            <div tw="bg-accent rounded p-8 z-10">
              <div css={imgWrapperStyle}>
                <img
                  src={node.thumbnail?.url}
                  className="post-image"
                  alt="post-cover"
                  width="100%"
                  height="100%"
                  tw="object-cover"
                />
              </div>

              <div tw="mx-8">
                <div tw="mt-8">
                  <h1 tw="text-4xl font-bold">{node.title}</h1>
                  <div css={articleTitleStyle}>
                    <div tw="flex">
                      <p>{categorySpans}</p>
                    </div>
                    <time>{node.createdAt}</time>
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: replacedHtml,
                  }}
                  tw="mt-12"
                />
              </div>
            </div>

            <div tw="mt-12">
              <div tw="flex justify-center">
                <p>この記事をシェアする</p>
              </div>
              <div tw="mt-4 flex justify-center">
                <IconButton isDark={true} />
                <IconButton isDark={true} />
                <IconButton isDark={true} />
                <IconButton isDark={true} />
              </div>
            </div>

            <div tw="mt-12">
              <div tw="p-8 bg-accent rounded">
                <p>前の記事と後の記事</p>
              </div>

            </div>
          </div>

          {/* プロフィール & 目次部分 */}
          <div tw="col-span-1 pl-6">
            <div tw="bg-accent rounded flex flex-col justify-center items-center">
              <div tw="mt-8">
                <div tw="rounded-circle overflow-hidden">
                  <img
                    src="/profile/profile.png"
                    alt="Profile"
                    width="200"
                    height="200"
                    tw="object-cover"
                  />
                </div>
              </div>
              <div tw="p-8">
                <p>{AboutConfig.profile.markdown}</p>
                {/* TwitterとかGithubのリンク貼りたい */}
              </div>
            </div>

            <div tw="mt-12 sticky top-4">
              <ToC headings={node.body?.childMarkdownRemark?.headings} />
            </div>
          </div>
        </Container>
      </ArticleWrapper>
    </Layout>
  );
};

const ArticleWrapper = tw.div`
  flex justify-center relative
`;

const Container = tw.div`
  container grid grid-cols-4 z-10 my-20 
`;

const imgWrapperStyle = css`
  ${tw`flex w-full justify-center`}
  aspect-ratio: 2 / 1;
`;

const articleTitleStyle = css`
  ${tw`flex mt-5 justify-between items-center relative`}
  &::after {
    ${tw`bg-primary`}
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -1rem;
  }
`;

export const pageQuery = graphql`
  query ArticleTemplate($id: String!) {
    allContentfulArticle(filter: { id: { eq: $id } }) {
      edges {
        previous {
          id
          title
          slug
          thumbnail {
            url
            title
          }
          category
          createdAt(formatString: "YYYY.MM.DD", locale: "ja")
        }
        node {
          id
          title
          body {
            childMarkdownRemark {
              html
              headings {
                value
                depth
              }
            }
          }
          thumbnail {
            url
            title
          }
          category
          createdAt(formatString: "YYYY.MM.DD", locale: "ja")
        }
        next {
          id
          title
          slug
          thumbnail {
            url
            title
          }
          category
          createdAt(formatString: "YYYY.MM.DD", locale: "ja")
        }
      }
    }
  }
`;

export default ArticleTemplate;
