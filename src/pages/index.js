import * as React from "react";
import Latest from "../components/Latest";

export default () => (
  <main className="bg-lightGrey">
    <h1 className="text-21md font-semibold">Newsroom</h1>
    <Latest />
  </main>
);

export const Head = () => <title>Home Page</title>;
