module.exports = {
  siteMetadata: {
    title: `jamstck-blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "552e3ab0ce170664d241ecd0f584d3",
      },
    },
  ],
};
