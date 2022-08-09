import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data: { articles } }) => {
  const post = articles.nodes[0];

  return (
    <main>
      <h1>Hello world!</h1>
      <p>{post.tag}</p>
      <p>{post.title}</p>
      <p>{post.date}</p>
      {/* <img src={post.image.url}></img> */}
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
