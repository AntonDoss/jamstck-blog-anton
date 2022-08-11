import React from "react";
import { graphql } from "gatsby";
import { StructuredText } from "react-datocms";

import Layout from "../../components/Layout";

export default function Post({ data: { post } }: any) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
      <p>{post.tag}</p>
    </Layout>
  );
}
export const query = graphql`
  query PostBySlug($id: String) {
    post: datoCmsArticle(id: { eq: $id }) {
      title
      slug
      text {
        value
      }
      date
      tag
      subtitle
      id
    }
  }
`;
