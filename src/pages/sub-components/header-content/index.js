import React, {useEffect} from "react";
import { Link } from "gatsby";

import StyledHeaderContent from "./styled-header-content";
import LanguageSelector from "../../../../components/language-selector";
import HeaderLogo from "../../../../static/icons/header-logo.react.svg";
import Button from "../../../../components/button";
import Text from "../../../../components/text";

const HeaderContent = (props) => {
  const { t, language, href, labelButton, headerText, ...rest } = props;

  const homepagePath = language === "en" ? "/" : `/${language}`;

  const cookiesName ="onlyoffice_personal_cookie";

  const getCookie = (name) => { 
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return true;
    } else {
        return false;
    }
  };

  useEffect(() => {
      const cookie = getCookie(cookiesName);
      console.log(cookie);       
  });  



  return (
    <StyledHeaderContent {...rest}>
      <div className="logo-wrapper">
        <Link className="top-logo" title="ONLYOFFICE" to={homepagePath}>
          <HeaderLogo className="image-wrapper" />
        </Link>
        {headerText && (
          <Text className="header-text" as="span" fontSize="16px">
            {headerText}
          </Text>
        )}
      </div>
      <div className="header-button">
        <Link className="top-logo" title="ONLYOFFICE" to={href}>
          <Button
            label={labelButton}
            typeButton="transparent"
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
