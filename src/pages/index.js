import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data: { articles } }) => {
  return (
    <main>
      <h1>Hello world!</h1>
      {articles.nodes.map((article) => {
        return (
          <div key={article.id}>
            <p>{article.tag}</p>
            <h2>{article.title}</h2>
            <p>{article.date}</p>
          </div>
        );
      })}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  {
    articles: allDatoCmsArticle {
      nodes {
        title
        id
        date
        tag
        image {
          url
        }
      }
    }
  }
`;
