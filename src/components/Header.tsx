import React, { useState } from "react";
import { graphql, Link, StaticQuery } from "gatsby";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="px-3">
      <div className="flex items-center justify-between py-4">
        <Link to="/">
          <h1 className="text-21md font-semibold">Newsroom</h1>
        </Link>
        <span className="arrow cursor-pointer" onClick={toggleMenu}></span>
      </div>
      <StaticQuery
        query={graphql`
          {
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
          <nav className={isToggled ? "block" : "hidden"}>
            <div className="mb-8 px-6 pt-1">
              <p className="label pt-4 font-normal">Popular Topics</p>
              <ul className="px-4">
                {data.topics.nodes.map(
                  (topic: { topic: string; slug: string; id: string }) => {
                    return (
                      <Link to={`/posts/topics/${topic.slug}`} key={topic.id}>
                        <li className="label mt-[14px] font-normal">
                          {topic.topic}
                        </li>
                      </Link>
                    );
                  }
                )}
              </ul>
            </div>
          </nav>
        )}
      />
    </div>
  );
};

export default Header;
