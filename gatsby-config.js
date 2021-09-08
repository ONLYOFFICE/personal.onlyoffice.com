const languages = require("./languages.json");
const { defaultLanguage, customAssetPrefix } = require("./config.json");

const availableLanguages = languages.map((el) => el.shortKey);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.personal.onlyoffice.com",
    title: "personal-gatsby",
  },
  assetPrefix: customAssetPrefix,
  plugins: [
    { resolve: "gatsby-plugin-styled-components" },
    { resolve: "gatsby-plugin-image" },
    { resolve: "gatsby-plugin-sharp" },
    { resolve: "gatsby-transformer-sharp" },
    { resolve: "gatsby-plugin-gatsby-cloud" },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-plugin-sitemap" },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `./static/${customAssetPrefix}/logo/favicon_general.png`,

        name: `personal.onlyoffice.com`,
        short_name: `Personal`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `rgb(255, 134, 92)`,
        display: `standalone`,
      },
    },
    { resolve: "gatsby-transformer-remark" },
    { resolve: "gatsby-plugin-mdx" },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: availableLanguages,
        defaultLanguage,
        siteUrl: `https://personal.onlyoffice.com/`,
        redirect: true,
        generateDefaultLanguagePage: `/en`,

        i18nextOptions: {
          fallbackLng: defaultLanguage,

          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Open Sans:200,300,400,400i,500,600,700,800`],
      },
    },
    {
      resolve: "gatsby-plugin-portal",
      options: {
        key: "portal",
        id: "portal",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.react.svg$/,
        },
      },
    },

    {
      resolve: "gatsby-plugin-asset-path",
      options: {
        fileTypes: ["js", "map"],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
