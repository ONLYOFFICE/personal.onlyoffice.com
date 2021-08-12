import React, { useState, useEffect } from "react";

import StyledHeaderContent from "./styled-header-content";
import LanguageSelector from "../../../components/language-selector";
import HeaderLogo from "../../../static/icons/header-logo.react.svg";
import Button from "../../../components/button";
import Text from "../../../components/text";
import Link from "../../../components/internal-link";
import Snackbar from "../../../components/snackbar";
import CookieContent from "../cookie-content";

const HeaderContent = (props) => {
  const {
    t,
    language,
    href,
    labelButton,
    headerText,
    withoutButton,
    ...rest
  } = props;
  const [isCookieCheck, setСookieCheck] = useState(false);
  const cookiesName = "onlyoffice_personal_cookie";

  useEffect(() => {
    const cookie = getCookie(cookiesName);
  });

  const homepagePath = language === "en" ? "/" : `/${language}`;

  const getCookie = (name) => {
    let value = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    console.log(value);
    if (value == null) {
      return setСookieCheck(true);
    } else {
      return setСookieCheck(false);
    }
  };

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

      {isCookieCheck && (
        <Snackbar>
          <CookieContent
            backGround={"rgba(249,249,249,0.95)"}
            width={"544px"}
            text={t(
              "This website uses cookies. By continuing to browse the website you agree to our "
            )}
            buttonLabel={t("Got it!")}
          />
        </Snackbar>
      )}
    </StyledHeaderContent>
  );
};

export default HeaderContent;
