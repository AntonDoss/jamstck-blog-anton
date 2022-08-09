module.exports = {
  siteMetadata: {
    title: `jamstck-blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "cb88c1cf8662921b1ab5136c825667"
    }
  }]
};