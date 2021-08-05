import React, {useEffect, useState} from "react";
import { Link } from "gatsby";

import StyledHeaderContent from "./styled-header-content";
import LanguageSelector from "../../../../components/language-selector";
import HeaderLogo from "../../../../static/icons/header-logo.react.svg";
import Button from "../../../../components/button";
import Text from "../../../../components/text";
import Snackbar from "../../../../components/snackbar";
import CookieContent from "./sub-components/cookie-content";

const HeaderContent = (props) => {
  const { t, language, href, labelButton, headerText, ...rest } = props;

  const homepagePath = language === "en" ? "/" : `/${language}`;

  const cookiesName ="onlyoffice_personal_cookie";

  const [isCookieCheck, setСookieCheck] = useState(false)

  useEffect(() => {
    const cookie = getCookie(cookiesName);
        
  });

  const getCookie = (name) => { 
    let value = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
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
            
      {
        isCookieCheck &&
        <Snackbar>     

          <CookieContent
            backGround={"rgba(249,249,249,0.95)"}
            width={"544px"}
            text={t("This website uses cookies. By continuing to browse the website you agree to our ")}
            buttonLabel={t("Got it!")}
          />
          
        </Snackbar>  
      }
            
      
      <LanguageSelector
        className="language-selector"
        currentLanguage={language}
        t={t}
      />
    </StyledHeaderContent>
  );
};

export default HeaderContent;
