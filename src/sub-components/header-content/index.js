import React from "react";

import StyledHeaderContent from "./styled-header-content";
import LanguageSelector from "../../../components/language-selector";
import HeaderLogo from "../../../static/icons/header-logo.react.svg";
import Button from "../../../components/button";
import Text from "../../../components/text";
import Link from "../../../components/internal-link";

import CookieSnackbar from "../cookie-snackbar";

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

  const homepagePath = language === "en" ? "/" : `/${language}`;

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
      <CookieSnackbar buttonLabel={t("CookieMessButton")} />
    </StyledHeaderContent>
  );
};

export default HeaderContent;
