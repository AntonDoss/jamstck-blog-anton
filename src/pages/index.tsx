import * as React from "react";
import { graphql, Link } from "gatsby";
import { useEffect, useState } from "react";

import Layout from "../components/Layout";

export default function Index({ data: { articles, articlesPerPage } }: any) {
  const articlesOnPage = articlesPerPage.entityPayload.attributes.number;
  const [allArticles] = useState(articles.nodes);
  const [pagination, setPagination] = useState(Array);
  const [loaded, setLoaded] = useState(false);
  const [limit] = useState(articlesOnPage);
  const [pages] = useState(Math.ceil(allArticles.length / limit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event: any) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    let pagesNumber = [...Array(Math.ceil(articles.totalCount / limit))].map(
      (_, i) => i + 1
    );
    console.log(articlesOnPage);

    setPagination(pagesNumber);
    setLoaded(true);
  }, [allArticles, limit]);

  const getPaginatedArticles = () => {
    const startIndex = currentPage * limit - limit;
    const endIndex = startIndex + limit;
    return allArticles.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / limit) * limit;
    let end = start + limit;

    return pagination.slice(start, end + 1);
  };

  return (
    <Layout>
      <main className="bg-lightGrey">
        <div className="mx-auto mb-6 max-w-[366px] md:max-w-[692px]">
          <h2 className="mb-4 text-2xl font-bold md:text-28md lg:text-32xl">
            Latest News
          </h2>
          <div className="flex flex-col">
            {getPaginatedArticles().map(
              (
                article: {
                  slug: string;
                  id: string;
                  image: { url: string };
                  tag: string;
                  title: string;
                  meta: { publishedAt: string };
                },
                index: number
              ) => {
                return (
                  <Link to={`/posts/${article.slug}`} key={article.id}>
                    <div className="mt-4 flex flex-col overflow-hidden rounded-xl">
                      <img className="" src={article.image.url} alt=""></img>
                      <div className="flex flex-col justify-between bg-white p-6">
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
          <div className="flex justify-between">
            <button
              onClick={goToPreviousPage}
              className={currentPage === 1 ? "prev disabled" : "prev"}
            >
              Prev
            </button>

            <p>
              {currentPage} of {pages}
            </p>

            {/* {loaded &&
              getPaginationGroup().map((pageNumber: any, index) => {
                return (
                  <div key={index}>
                    <button
                      onClick={changePage}
                      className={
                        currentPage === pageNumber ? "active font-bold" : ""
                      }
                    >
                      {pageNumber}
                    </button>
                  </div>
                );
              })} */}

            <button
              onClick={goToNextPage}
              className={currentPage === pages ? "next disabled" : "next"}
            >
              Next
            </button>
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
      totalCount
    }
    articlesPerPage: datoCmsArticlesPerPage {
      entityPayload {
        attributes {
          number
        }
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
