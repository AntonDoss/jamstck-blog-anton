import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="h-12 px-3">
      <Link to="/">
        <h1 className="text-21md font-semibold">Newsroom</h1>
      </Link>
    </div>
  );
};

export default Header;
