const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  actions.setWebpackConfig({
    devtool: getConfig().mode === "production" ? false : "source-map",
    resolve: {
      fallback: {
        crypto: false,
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
