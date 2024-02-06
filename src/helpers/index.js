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
  const confirmLinkData = Object.assign(
    {
      type,
    },
    queryParams
  );

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
    .then((result) => {
      switch (result) {
        case ValidationResult.Ok:
          return {
            isValidLink: true,
            errorValidationLink: false,
          };
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
          return {
            isValidLink: false,
            errorValidationLink: t("UnknownError"),
          };
      }
    })
    .catch((e) => {
      return {
        isValidLink: false,
        errorValidationLink: `${e}`,
      };
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

export function sendAnalytics(key) {
  if (typeof window == "undefined") {
    return;
  }
  if (window.dataLayer) {
    window.dataLayer.push({
      event: key,
    });
  }
  if (window.gtag) {
    window.gtag("event", key, {
      event_category: key,
    });
  }
}

export const setCookie = (name, value, options = null) => {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
};

export const redirectToMainPage = () => {
  const redirectPath = localStorage.getItem("redirectPath");
  if (redirectPath) localStorage.removeItem("redirectPath");
  window.location.href = redirectPath || "/";
};

export const removeOAuthKey = () => {
  localStorage.removeItem("profile");
  localStorage.removeItem("code");
};

export const getCreateUrl = (language) => {
  let dstPath = "";

  if (language !== config.defaultLanguage) {
    const docspaceLangs = [
      "en-GB",
      "fr",
      "de",
      "es",
      "pt-BR",
      "pt",
      "it",
      "cs",
      "nl",
      "ja",
      "zh",
      "ru",
    ];

    const lng = docspaceLangs.find((l) => l === language);

    if (!!lng) {
      switch (lng) {
        case "en-GB":
          dstPath += "en";
          break;
        case "pt-BR":
          dstPath += "pt";
          break;
        default:
          dstPath += language;
          break;
      }

      dstPath += "/";
    }
  }

  return `https://www.onlyoffice.com/${dstPath}docspace-registration.aspx`;
};
