import React from 'react';
import { graphql, PageProps } from 'gatsby';
import 'twin.macro';

import Layout from '../layouts/Layout';
import Hero from '../components/top/hero/Hero';
import TopAbout from '../components/top/about/TopAbout';
import TopArticle from '../components/top/articles/TopArticles';
import ArticleCard from '../components/utils/ArticleCard';

const Top: React.FC<PageProps<GatsbyTypes.allAritcleListQuery>> = ({
  data,
}) => {
  const articles = data.allContentfulArticle.nodes;

  const articleCards = articles.map((node) => {
    return (
      <ArticleCard
        key={node.id}
        id={node.id}
        imageUrl={node.thumbnail?.url ?? '/card/default-card-img.png'}
        title={node.title as string}
        date={node.createdAt as string}
        categories={node.category as string[]}
      />
    );
  });

  return (
    <Layout>
      <section>
        <Hero />
      </section>

      <section>
        <div tw="mt-20">
          <TopAbout />
        </div>
      </section>

      <section>
        <TopArticle>{articleCards}</TopArticle>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query allAritcleList {
    allContentfulArticle(limit: 6) {
      nodes {
        category
        id
        slug
        title
        createdAt(formatString: "YYYY.MM.DD", locale: "ja")
        thumbnail {
          url
        }
      }
    }
  }
`;

export default Top;
