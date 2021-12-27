const path = require("path");
const { revisionTitle } = require("./config.json");

const getBuildDate = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return JSON.stringify(today.toISOString().split(".")[0] + "Z");
};

exports.onCreateWebpackConfig = ({ actions, getConfig, plugins }) => {
  actions.setWebpackConfig({
    devtool: getConfig().mode === "production" ? false : "source-map",
    resolve: {
      fallback: {
        crypto: false,
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    plugins: [
      plugins.define({
        BUILD_AT: getBuildDate(),
      }),
    ],
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    node.frontmatter.title.toLowerCase() === revisionTitle &&
      actions.createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/revision.js`),
      });
  });
};
