// import { GatsbyNode } from "gatsby";
// import { resolve } from "path";

// export const createPages: GatsbyNode["createPages"] = async ({
//   actions,
//   graphql,
// }) => {
//   const { createPage } = actions;

//   const allArticles: {
//     errors?: any;
//     data?: { allDatoCmsArticle: { nodes: { slug?: string }[] } };
//   } = await graphql(`
//     query MyQuery {
//       allDatoCmsArticle {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);

//   allArticles.data?.allDatoCmsArticle.nodes.forEach((node) => {
//     const { slug } = node;
//     if (!slug) return;

//     createPage({
//       path: slug,
//       component: resolve(__dirname, "./src/templates/article.tsx"),
//       context: {
//         slug,
//       },
//     });
//   });
// };
