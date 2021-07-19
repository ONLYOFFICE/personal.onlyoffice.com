import React from "react";
import { Link } from "gatsby";

import StyledHeaderContent from "./styled-header-content";
import LanguageSelector from "../../../components/language-selector";
import HeaderLogo from "../../../static/icons/header-logo.react.svg";
import Button from "../../../components/button";
import Text from "../../../components/text";

const HeaderContent = (props) => {
  const { t, language, href, labelButton, headingText, ...rest } = props;

  const homepagePath = language === "en" ? "/" : `/${language}`;

  return (
    <StyledHeaderContent {...rest}>
      <div className="logo-wrapper">
        <Link className="top-logo" title="ONLYOFFICE" to={homepagePath}>
          <HeaderLogo className="image-wrapper" />
        </Link>
      </div>
      <div className="header-button">
        {headingText && (
          <Text className="header-text" as="span">
            {headingText}
          </Text>
        )}
        <Link className="top-logo" title="ONLYOFFICE" to={href}>
          <Button
            label={labelButton}
            type="transparent"
            height="100%"
            width="100%"
          />
        </Link>
      </div>
      <LanguageSelector
        className="language-selector"
        currentLanguage={language}
        t={t}
      />
    </StyledHeaderContent>
  );
};

export default HeaderContent;