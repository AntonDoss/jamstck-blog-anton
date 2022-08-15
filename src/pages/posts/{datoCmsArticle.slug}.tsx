import React from "react";
import { graphql, Link } from "gatsby";
import { StructuredText } from "react-datocms";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";

export default function Post({ data: { post, articles } }: any) {
  return (
    <Layout>
      <main className="container mx-auto max-w-[414px]">
        <div className="mb-5">
          <p className="label text-xs font-bold uppercase text-labelGrey">
            {post.tag}
          </p>
          <p className="label mt-1 text-xs font-semibold uppercase text-labelGrey">
            {post.meta.publishedAt}
          </p>
        </div>
        <h1 className="text-32xl font-bold leading-[1.125]">{post.title}</h1>
        <p className="mt-4 text-21md font-medium">{post.subtitle}</p>
        <img src={post.image.url} />
        <div className="structured-text">
          <StructuredText
            data={post.body}
            renderBlock={({ record }: any) => {
              if (record.__typename === "DatoCmsImage") {
                return (
                  <GatsbyImage image={record.image.gatsbyImageData} alt={""} />
                );
              }
              return (
                <>
                  <p>ERROR</p>
                  <p>{JSON.stringify(record, null, 2)}</p>
                </>
              );
            }}
          />
        </div>
        <h2 className="text-2xl font-bold md:text-28md lg:text-32xl">
          Latest News
        </h2>
        {articles.nodes
          .filter((article: { title: string }) => article.title != post.title)
          .slice(0, 3)
          .map(
            (article: {
              slug: string;
              id: string;
              image: { url: string };
              tag: string;
              title: string;
              meta: { publishedAt: string };
            }) => {
              return (
                <Link to={`/posts/${article.slug}`} key={article.id}>
                  <div className="flex justify-items-stretch border-b border-[#d2d2d7] py-7">
                    <div className="w-24 pr-4 ">
                      <img className="" src={article.image.url} alt=""></img>
                    </div>
                    <div>
                      <p className="label mb-2 text-xs font-bold uppercase text-labelGrey">
                        {article.tag}
                      </p>
                      <h2 className="mb-2 text-19sm font-bold leading-[1.125] md:text-21md lg:text-32xl">
                        {article.title}
                      </h2>
                      <p className="label mb-2 text-sm font-semibold text-labelGrey">
                        {article.meta.publishedAt}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
      </main>
    </Layout>
  );
}
export const query = graphql`
  query PostBySlug($id: String) {
    post: datoCmsArticle(id: { eq: $id }) {
      title
      subtitle
      body {
        value
        blocks {
          __typename
          id: originalId
          image {
            gatsbyImageData
          }
        }
      }
      tag
      slug
      id
      image {
        url
      }
      meta {
        publishedAt(formatString: "MMMM D, YYYY")
      }
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
        meta {
          publishedAt(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`;
