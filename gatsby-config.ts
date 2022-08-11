module.exports = {
  siteMetadata: {
    title: `jamstck-blog Anton Do`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "552e3ab0ce170664d241ecd0f584d3",
      },
    },
  ],
};
