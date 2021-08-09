const languages = require("./languages.json");
const { defaultLanguage } = require("./config.json");

const availableLanguages = languages.map((el) => el.shortKey);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.personal.onlyoffice.com",
    title: "personal-gatsby",
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo/favicon_general.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },

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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans:200,300,400,400i,500,600,700,800`],
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
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
  ],
};
