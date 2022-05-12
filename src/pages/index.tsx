import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import ArticleLink from '../components/ArticleLink';

const Top: any= ({
  data,
}: { data: any}) => {
  const articles = data.allContentfulArticle.edges
  return (
    <Layout>
      <div>Home</div>
      {articles.map((edge: { node: { slug: React.Key | null | undefined; title: string; date: string; thumbnail: { url: string; }; category: string[]; }; }) => (
        <ArticleLink
          key={edge.node.slug}
          title={edge.node.title as string}
          date={edge.node.date as string}
          imageUrl={edge.node.thumbnail?.url as string}
          category={edge.node.category as string[]}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query allAritcleList {
    allContentfulArticle {
      edges {
        node {
          slug
          title
          thumbnail {
            url
          }
          category
          date
        }
      }
    }
  }
`;

export default Top;
