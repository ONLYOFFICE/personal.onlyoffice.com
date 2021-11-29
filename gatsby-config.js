const languages = require("./languages.json");
const {
  defaultLanguage,
  customAssetPrefix,
  siteUrl,
} = require("./config.json");
const availableLanguages = languages.map((el) => el.shortKey);

module.exports = {
  siteMetadata: {
    siteUrl: siteUrl,
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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "**/404/",
          "**/404.html",
          "**/confirm/**/*",
          "**/create-now/",
          "**/password-recovery/",
          "**/sign-in/",
          "**/success/",
        ],
        query: `
        {
          siteBuildMetadata{
            buildTime
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          siteBuildMetadata: { buildTime: lastMod },
        }) => {
          const wpNodeMap = lastMod;
          return allPages.map((page) => {
            return { ...page, wpNodeMap };
          });
        },
        serialize: ({ path, wpNodeMap }) => {
          return {
            url: path,
            changefreq: `monthly`,
            priority: 1.0,
            lastmod: wpNodeMap,
          };
        },
      },
    },
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: "https://personal.onlyoffice.com/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            disallow: [
              "/sign-in/",
              "/password-recovery/",
              "/create-now/",
              "/success/",
              "/confirm/",
              "/revision/",
            ],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    { resolve: "gatsby-transformer-remark" },
    { resolve: "gatsby-plugin-mdx" },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: availableLanguages,
        defaultLanguage,
        siteUrl: siteUrl,
        redirect: false,
        generateDefaultLanguagePage: `/en`,

        i18nextOptions: {
          fallbackLng: defaultLanguage,

          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/revision",
            languages: [""],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Open Sans:200,300,400,400i,500,600,700,800`],
        display: "swap",
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
        fileTypes: ["js", "css"],
        removeMapFiles: true,
      },
    },
  ],
};
