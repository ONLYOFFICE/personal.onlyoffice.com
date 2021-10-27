import React, { useState, useEffect } from "react";

import StyledHeaderContent from "./styled-header-content";
import LanguageSelector from "../../../components/language-selector";
import HeaderLogo from "../../../static/site-assets/icons/header-logo.react.svg";
import Button from "../../../components/button";
import Text from "../../../components/text";
import Link from "../../../components/internal-link";

import CookieSnackbar from "../cookie-snackbar";

const HeaderContent = ({
  t,
  language,
  href,
  labelButton,
  headerText,
  withoutButton,
  ...rest
}) => {
  const [isDesktopClient, setIsDesktopClient] = useState(null);
  const [homepagePath, setHomePagePath] = useState(
    language === "en" ? "/" : `/${language}`
  );

  useEffect(() => {
    const isDesktopClient = window["AscDesktopEditor"] !== undefined;
    setIsDesktopClient(isDesktopClient);
  }, []);

  useEffect(() => {
    if (isDesktopClient) {
      let path = language === "en" ? "/" : `/${language}/`;
      path += "sign-in";
      setHomePagePath(path);
    }
  });

  return (
    <StyledHeaderContent {...rest}>
      <div className="logo-wrapper">
        <Link
          className="top-logo"
          title="ONLYOFFICE"
          href={homepagePath}
          tabIndex={-1}
        >
          <HeaderLogo className="image-wrapper" />
        </Link>
        {headerText && (
          <Text className="header-text" as="span" fontSize="16px">
            {headerText}
          </Text>
        )}
      </div>
      <div>
        {!withoutButton && (
          <Link title="ONLYOFFICE" href={href} tabIndex={-1}>
            <Button
              className="header-button"
              label={labelButton}
              typeButton="transparent"
              height="100%"
              width="100%"
            />
          </Link>
        )}
      </div>
      <LanguageSelector
        className="language-selector"
        currentLanguage={language}
        t={t}
      />
      {!isDesktopClient && (
        <CookieSnackbar buttonLabel={t("CookieMessButton")} />
      )}
    </StyledHeaderContent>
  );
};

export default HeaderContent;
