const path = require('path');
const query = `{
  allContentfulArticle {
    nodes {
      slug
      id
    }
  }
}
`;

exports.createPages = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const res = await graphql(query);

  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const articles = res.data.allContentfulArticle.nodes;

  articles.forEach((article) => {
    createPage({
      path: `article/${article.slug}`,
      component: path.resolve('./src/templates/ArticleTemplate.tsx'),
      context: { 
        id: article.id
      },
    });
  });
};
