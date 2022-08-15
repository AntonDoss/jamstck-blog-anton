import * as React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <main className="bg-lightGrey">
      <StaticQuery
        query={graphql`
          {
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
            topics: allDatoCmsTopic {
              nodes {
                id
                slug
                topic
              }
            }
          }
        `}
        render={(data) => (
          <div className="mx-auto mb-6 flex max-w-[366px] flex-col">
            <h2 className="text-2xl font-bold md:text-28md lg:text-32xl">
              Latest News
            </h2>
            {data.articles.nodes.map(
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
                    <div className="mt-3.5 border-solid">
                      <img
                        className="rounded-t-xl"
                        src={article.image.url}
                        alt=""
                      ></img>
                      <div className="flex flex-col justify-between rounded-b-xl bg-white p-6">
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
          </div>
        )}
      />
    </main>
  </Layout>
);

export const Head = () => <title>Home Page</title>;
