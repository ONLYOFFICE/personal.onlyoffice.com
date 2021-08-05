import config from "../../api.config.json";

const { appServerUrl, api } = config;

const options = {
  appServerUrl,
  apiPrefixURL: (api && api.url) || "/api/2.0",
  apiTimeout: (api && api.timeout) || 30000,
};

export default options;
