import React from "react";
import browserLang from "browser-lang";
import { navigate } from "gatsby";
import { getCookie, setCookie } from ".";
import { SITE_LANGUAGE_COOKIE } from "./constants";

const cookieOption = { "max-age": 31536000 };

const setLanguageCookie = (value) => {
  setCookie(SITE_LANGUAGE_COOKIE, value, cookieOption);
};

const replaceLanguagePrefix = (currentLanguage, pathname, languages) => {
  const separatedUrl = pathname.split("/");
  const pureSeparatedUrl = separatedUrl.filter((item) => item);
  const isPrefix = languages.includes(pureSeparatedUrl[0]);

  let newPath;

  if (!isPrefix) {
    pureSeparatedUrl.unshift(`/${currentLanguage}`);
  } else {
    pureSeparatedUrl[0] = currentLanguage;
  }

  newPath = pureSeparatedUrl.join("/");

  return newPath;
};

const getLanguageFromPath = (pathname) => {
  const separatedUrl = pathname.split("/");
  return separatedUrl[1];
};

const withDetectLanguage = (WrappedPage) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const {
        pageContext: {
          i18n: { defaultLanguage, languages },
        },
      } = props;

      const langCookie = getCookie(SITE_LANGUAGE_COOKIE);

      let detected =
        langCookie ||
        browserLang({
          languages,
          fallback: defaultLanguage,
        });

      const prefixFromPath = getLanguageFromPath(window.location.pathname);

      const isAvailablePrefix = languages.includes(prefixFromPath);

      if (isAvailablePrefix && detected !== prefixFromPath) {
        setLanguageCookie(prefixFromPath);
      }

      if (!isAvailablePrefix) {
        setLanguageCookie(detected);
        const newPath = replaceLanguagePrefix(
          detected,
          window.location.pathname,
          languages
        );
        navigate(newPath);
      }
    }
    return <WrappedPage {...props} />;
  };
};

export default withDetectLanguage;
