const { i18n } = require("./next-i18next.config");
const withLinaria = require("next-linaria");

module.exports = withLinaria({
  reactStrictMode: true,
  i18n,
});
