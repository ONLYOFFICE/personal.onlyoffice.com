const CopyPlugin = require("copy-webpack-plugin");

module.exports = ({ config }) => {
  const rules = config.module.rules;

  const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));
  fileLoaderRule.exclude = /\.react.svg$/;

  rules.push(
    {
      test: /\.react.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    },
    {
      test: /\.(js)$/,
      use: [
        {
          loader: "linaria/loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    }
  );

  config.plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: "../src/images",
          to: "./static/images",
          toType: "dir",
          context: "storybook-static",
        },
      ],
    })
  );

  return config;
};