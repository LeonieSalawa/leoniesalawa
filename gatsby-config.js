module.exports = {
  siteMetadata: {
    /**
     * CONFIG FILE
     * 
     * Change here values that will be used 
     * during the build of the website.
     */
    title: `Léonie Salawa`,
    name: `Léonie Salawa`,
    siteUrl: `https://www.leoniesalawa.me`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to ...`, //I dunno yet
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/LeonieSalawa`,
      },
      {
        name: `github`,
        url: `https://github.com/LeonieSalawa`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/LeonieSalawa`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/LéonieSalawa/`,
      }
    ],
  },
  /** 
   * STOP
   * Next values are plugins which
   * are intend to extend functionalities
   */
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
