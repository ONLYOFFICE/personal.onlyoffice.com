import sjcl from "sjcl";
import * as queryString from "query-string";
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

export function getConfirmHeader(location) {
  const { search } = location;

  const queryParams = getObjectByLocation(location);
  const url = location.pathname;
  const posSeparator = url.lastIndexOf("/");
  const type = url.slice(posSeparator + 1);
  const confirmLinkData = Object.assign({ type }, queryParams);

  const confirmHeader = `type=${confirmLinkData.type}&${search.slice(1)}`;

  return confirmHeader;
}
