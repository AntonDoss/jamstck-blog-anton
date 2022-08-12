import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";

export default function Post({ data: { post } }: any) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
      <p>{post.tag}</p>
      <div>{post.body}</div>
    </Layout>
  );
}
export const query = graphql`
  query PostBySlug($id: String) {
    post: datoCmsArticle(id: { eq: $id }) {
      title
      subtitle
      body
      tag
      slug
      id
    }
  }
`;
