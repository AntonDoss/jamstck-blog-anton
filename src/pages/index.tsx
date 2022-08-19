import * as React from "react";
import { graphql, Link } from "gatsby";
import { useState } from "react";

import Layout from "../components/Layout";

export default function Index({
  data: { articles, articlesPerPage, featured },
}: any) {
  const articlesOnPage = articlesPerPage.number;
  const allArticles = articles.nodes;
  const pages = Math.ceil(allArticles.length / articlesOnPage);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const getPaginatedArticles = () => {
    const startIndex = currentPage * articlesOnPage - articlesOnPage;
    const endIndex = startIndex + articlesOnPage;
    return allArticles.slice(startIndex, endIndex);
  };

  return (
    <Layout>
      <main className="bg-lightGrey">
        <div className="mx-auto mb-6 max-w-[366px] pb-10 md:max-w-[692px]">
          <h2 className="mb-4 text-2xl font-bold md:text-28md lg:text-32xl">
            Latest News
          </h2>
          <div className="flex flex-col">
            {getPaginatedArticles().map(
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
                    <div className="mt-4 flex flex-col overflow-hidden rounded-xl">
                      <div className="h-52">
                        <img className="" src={article.image.url} alt=""></img>
                      </div>
                      <div className="flex max-h-[167px] flex-col justify-between bg-white p-6">
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
          <div className="mt-6 flex justify-between">
            <button
              onClick={goToPreviousPage}
              className={currentPage === 1 ? "prev disabled" : "prev"}
            >
              ←
            </button>
            <p>
              {currentPage} of {pages}
            </p>
            <button
              onClick={goToNextPage}
              className={currentPage === 1 ? "next disabled" : "next"}
            >
              →
            </button>
          </div>
        </div>
        <div className="container overflow-hidden bg-darkGrey py-10 text-white">
          <h2 className="mb-4 ml-[104px] text-2xl font-bold md:text-28md lg:text-32xl">
            Featured Stories
          </h2>
          <div className="no-scrollbar flex overflow-hidden overflow-x-scroll px-26">
            {featured.nodes[0].posts.map(
              (post: {
                id: string;
                image: { url: string };
                slug: string;
                title: string;
                meta: { publishedAt: string };
              }) => {
                return (
                  <Link to={`/posts/${post.slug}`} key={post.id}>
                    <div className="mt-4 mr-3 flex w-[366px] flex-col overflow-hidden rounded-xl">
                      <div className="h-52">
                        <img className="" src={post.image.url} alt=""></img>
                      </div>
                      <div className="flex max-h-[167px] flex-col justify-between p-6">
                        <h2 className="mb-2 text-19sm font-bold leading-[1.125] md:text-21md lg:text-32xl">
                          {post.title}
                        </h2>
                        <p className="label mb-2 text-sm font-semibold">
                          {post.meta.publishedAt}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query allDatoCmsArticles {
    articles: allDatoCmsArticle {
      nodes {
        slug
        title
        id
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
      totalCount
    }
    articlesPerPage: datoCmsArticlesPerPage {
      number
    }
    featured: allDatoCmsFeatured {
      nodes {
        posts {
          title
          slug
          image {
            url
          }
          id
          meta {
            publishedAt(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
