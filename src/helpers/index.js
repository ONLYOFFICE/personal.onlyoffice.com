import sjcl from "sjcl";
import * as queryString from "query-string";
import { ValidationResult } from "./constants";
import { checkConfirmLink } from "../api";
import config from "../../config.json";

export function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function createPasswordHash(password, hashSettings) {
  if (
    !password ||
    !hashSettings ||
    typeof password !== "string" ||
    typeof hashSettings !== "object" ||
    !hashSettings.hasOwnProperty("salt") ||
    !hashSettings.hasOwnProperty("size") ||
    !hashSettings.hasOwnProperty("iterations") ||
    typeof hashSettings.size !== "number" ||
    typeof hashSettings.iterations !== "number" ||
    typeof hashSettings.salt !== "string"
  )
    throw new Error("Invalid params.");

  const { size, iterations, salt } = hashSettings;

  let bits = sjcl.misc.pbkdf2(password, salt, iterations);
  bits = bits.slice(0, size / 32);
  const hash = sjcl.codec.hex.fromBits(bits);

  return hash;
}

export function parseQueryParams(params) {
  if (!params) return false;
  const parsedParams = queryString.parse(params);
  return parsedParams;
}

function getObjectByLocation(location) {
  if (!location.search || !location.search.length) return null;

  const searchUrl = location.search.substring(1);
  const object = JSON.parse(
    '{"' +
      decodeURIComponent(searchUrl)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );

  return object;
}

export function getConfirmLinkData(location) {
  if (!location) return null;

  const queryParams = getObjectByLocation(location);
  const url = location.pathname;
  const posSeparator = url.lastIndexOf("/");
  const type = url.slice(posSeparator + 1);
  const confirmLinkData = Object.assign({ type }, queryParams);

  return confirmLinkData;
}

export function getConfirmHeader(location) {
  if (!location) return null;

  const { search } = location;
  const confirmLinkData = getConfirmLinkData(location);
  const confirmHeader = `type=${confirmLinkData.type}&${search.slice(1)}`;

  return confirmHeader;
}

export function checkingConfirmLink(location, t) {
  const confirmLinkData = getConfirmLinkData(location);

  return checkConfirmLink(confirmLinkData)
    .then((validationResult) => {
      switch (validationResult) {
        case ValidationResult.Ok:
          return { isValidLink: true, errorValidationLink: false };
        case ValidationResult.Invalid:
          return {
            isValidLink: false,
            errorValidationLink: t("ConfirmInvalidLink"),
          };
        case ValidationResult.Expired:
          return {
            isValidLink: false,
            errorValidationLink: t("ConfirmExpiredLink"),
          };
        default:
          return { isValidLink: false, errorValidationLink: t("UnknownError") };
      }
    })
    .catch((e) => {
      return { isValidLink: false, errorValidationLink: `${e}` };
    });
}

export const getLocalizedImagePrefix = (prefixes, language) => {
  if (!Array.isArray(prefixes) || !language) return false;

  let prefix = config.defaultLanguage;

  prefixes.map((el) => {
    if (language.includes(el)) {
      prefix = el;
    }
    return false;
  });

  return prefix;
};

export const sendMetrics = (action, category, label, value) =>{
  const values = {};
  if (typeof category !== 'undefined'){
    values['event_category'] = category;
  }
  if (typeof label !== 'undefined'){
    values['event_label'] = label;
  }
  if (typeof value !== 'undefined'){
    values['value'] = value;
  }
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined'){
    window.gtag('event', action, values);
  } else{
    console.log('event', action, values)
  }
}
