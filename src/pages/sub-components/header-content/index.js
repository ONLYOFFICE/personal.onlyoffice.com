import React, {useEffect, useState} from "react";
import { Link } from "gatsby";

import StyledHeaderContent from "./styled-header-content";
import LanguageSelector from "../../../../components/language-selector";
import HeaderLogo from "../../../../static/icons/header-logo.react.svg";
import Button from "../../../../components/button";
import Text from "../../../../components/text";
import Snackbar from "../../../../components/snackbar";

const HeaderContent = (props) => {
  const { t, language, href, labelButton, headerText, ...rest } = props;

  const homepagePath = language === "en" ? "/" : `/${language}`;

  const [isCookieCheck, setcookieCheck] = useState(false)
  const cookiesName ="onlyoffice_personal_cookie";


  const getCookie = (name) => { 
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return setcookieCheck(false);
    } else {
        return setcookieCheck(true);
    }
  };

  useEffect(() => {
      const cookie = getCookie(cookiesName);
          
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
            
      {
        isCookieCheck &&
        <Snackbar            
        text={t("This website uses cookies. By continuing to browse the website you agree to our ")}
        buttonText={t("Got it!")}

        >
          <Button 
            label={t("Got it!")}
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
