module.exports = {
  siteMetadata: {
    title: "IEEE-ComSoc-Tokyo-Joint-Chapter",
    description: "IEEE ComSoc Sapporo/Shinetsu/Tokyo/Nagoya/Shikoku/Hiroshima/Fukuoka Joint Sections Chapter",
    siteUrl: `https://yamazato.nuee.nagoya-u.ac.jp/IEEE-ComSoc-Tokyo-Joint-Chapter/`,
    social: {
      facebook: `https://www.facebook.com/JapanOCWConsortium/`,
    },
  },
  pathPrefix: `/IEEE-ComSoc-Tokyo-Joint-Chapter`,
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://yamazato.nuee.nagoya-u.ac.jp/IEEE-ComSoc-Tokyo-Joint-Chapter/`,
      },
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-image",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        // purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
  ],
};
