import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../layouts/Layout';

const ArticleTemplate: React.FC<
  PageProps<GatsbyTypes.ArticleTemplateQuery>
> = ({ data }) => {
  const article = data.allContentfulArticle.nodes[0];
  return (
    <Layout>
      <div className="post-header">
        <h1>{article.title}</h1>
        <p className="post-date">{}</p>
      </div>
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

export default ArticleTemplate;
