import React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

import Layout from '../layouts/Layout';
import BgRectLeft from '../components/utils/bgRect/Left';

const ArticleTemplate: React.FC<
  PageProps<GatsbyTypes.ArticleTemplateQuery>
> = ({ data }) => {
  const article = data.allContentfulArticle.nodes[0];
  return (
    <Layout>
      <ArticleWrapper>
        <BgRectLeft />
      </ArticleWrapper>
      <img
        src={article.thumbnail?.url}
        className="post-image"
        alt="post-cover"
      ></img>
      <div
        dangerouslySetInnerHTML={{
          __html: article.body?.childMarkdownRemark?.html as string,
        }}
        className="post-body"
      />
    </Layout>
  );
};

const ArticleWrapper = tw.div`
  flex justify-center relative
`;

const Container = tw.div`
  container
`;

export const pageQuery = graphql`
  query ArticleTemplate($id: String!) {
    allContentfulArticle(filter: { id: { eq: $id } }) {
      nodes {
        body {
          childMarkdownRemark {
            html
          }
        }
        category
        id
        slug
        title
        thumbnail {
          url
        }
      }
    }
  }
`;

/*
  allContentfulArticle {
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
            tableOfContents
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
*/

export default ArticleTemplate;
