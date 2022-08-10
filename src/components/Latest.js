import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
      <div className="container mx-auto flex flex-col">
        <h2 className="text-2xl font-bold md:text-28md lg:text-32xl">
          Latest News
        </h2>
        {data.articles.nodes.map((article) => {
          return (
            <div
              className="mb-6 flex flex-col bg-white md:flex-row"
              key={article.id}
            >
              <img className="" src={article.image.url} alt=""></img>
              <div>
                <p className="label mb-2 text-xs font-bold uppercase text-labelGrey">
                  {article.tag}
                </p>
                <h2 className="text-19sm font-bold leading-[1.125] md:text-21md lg:text-32xl">
                  {article.title}
                </h2>
                <p className="label mt-2 text-sm font-semibold text-labelGrey">
                  {article.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    )}
  />
);
