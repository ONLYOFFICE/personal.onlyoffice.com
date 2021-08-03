import axios from "axios";
import config from "./config";

const { appServerUrl, apiTimeout, apiPrefixURL } = config;

const apiUrl = appServerUrl + apiPrefixURL;

const client = axios.create({
  baseURL: apiUrl,
  responseType: "json",
  timeout: apiTimeout,
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getResponseError = (res) => {
  if (!res) return;

  if (res.data && res.data.error) {
    return res.data.error.message;
  }

  if (res.isAxiosError && res.message) {
    console.error(res.message);
    return res.message;
  }
};

export const request = (options) => {
  console.log(options);
  const onSuccess = function (response) {
    const error = getResponseError(response);
    if (error) throw new Error(error);

    if (!response || !response.data || response.isAxiosError) return null;

    if (response.data.hasOwnProperty("total"))
      return { total: +response.data.total, items: response.data.response };

    return response.data.response;
  };

  const onError = function (errorResponse) {
    console.error("Request Failed:", errorResponse);

    const errorText = errorResponse.response
      ? getResponseError(errorResponse.response)
      : errorResponse.message;

    return Promise.reject(errorText || errorResponse);
  };

  return client(options).then(onSuccess).catch(onError);
};
