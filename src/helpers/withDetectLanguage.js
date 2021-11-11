import React from "react";
import browserLang from "browser-lang";
import { navigate } from "gatsby";
import { getCookie, setCookie } from ".";
import { SITE_LANGUAGE_COOKIE } from "./constants";
import { parseQueryParams } from ".";

const cookieOption = { "max-age": 31536000 };

const withDetectLanguage = (WrappedPage) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const {
        pageContext: {
          i18n: { defaultLanguage, languages },
        },
        location,
      } = props;
      const { pathname, search, state } = location;

      const langCookie = getCookie(SITE_LANGUAGE_COOKIE);

      let detected =
        langCookie ||
        browserLang({
          languages,
          fallback: defaultLanguage,
        });

      const separatedUrl = pathname.split("/");
      const prefixFromPath = separatedUrl[1];

      const isAvailablePrefix = languages.includes(prefixFromPath);

      const replaceLanguagePrefix = () => {
        if (defaultLanguage === detected) return false;

        const pureSeparatedUrl = separatedUrl.filter((item) => item);
        const isPrefix = languages.includes(pureSeparatedUrl[0]);

        const params = parseQueryParams(search);
        const { lang: linkLanguage } = params;

        const currentLanguage =
          linkLanguage && linkLanguage !== detected ? linkLanguage : detected;

        let newPath;

        if (!isPrefix) {
          pureSeparatedUrl.unshift(`/${currentLanguage}`);
        } else {
          pureSeparatedUrl[0] = currentLanguage;
        }

        newPath = pureSeparatedUrl.join("/") + search;

        navigate(newPath, { state: { ...state } });
      };

      if (isAvailablePrefix && (detected !== prefixFromPath || !langCookie)) {
        setCookie(SITE_LANGUAGE_COOKIE, prefixFromPath, cookieOption);
      }

      if (!isAvailablePrefix) {
        setCookie(SITE_LANGUAGE_COOKIE, detected, cookieOption);
        replaceLanguagePrefix();
      }
    }
    return <WrappedPage {...props} />;
  };
};

export default withDetectLanguage;
