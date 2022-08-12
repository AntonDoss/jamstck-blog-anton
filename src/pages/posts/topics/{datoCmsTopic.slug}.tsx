import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../../../components/Layout";

export default function Topic({ data: { topic, articles } }: any) {
  const articlesByTopic = articles.nodes.filter(
    (node: { topics: { topic: any }[] }) => node.topics[0].topic === topic.topic
  );
  return (
    <Layout>
      <p className="label mb-2 text-xs font-bold uppercase text-labelGrey">
        Latest news
      </p>
      <h2 className="text-2xl font-bold md:text-28md lg:text-32xl">
        {topic.topic}
      </h2>
      {articlesByTopic.map(
        (
          article: {
            slug: string;
            title: string;
          },
          index: number
        ) => {
          return (
            <Link to={`/posts/${article.slug}`} key={index}>
              <p className="mb-3 text-xl">{article.title}</p>
            </Link>
          );
        }
      )}
    </Layout>
  );
}
export const query = graphql`
  query TopicBySlug($id: String) {
    topic: datoCmsTopic(id: { eq: $id }) {
      id
      slug
      topic
    }
    articles: allDatoCmsArticle {
      nodes {
        slug
        title
        id
        tag
        image {
          url
        }
        topics {
          topic
          slug
          id
        }
      }
    }
  }
`;
