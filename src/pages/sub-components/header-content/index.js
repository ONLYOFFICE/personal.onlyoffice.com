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
  
  const [display, setDisplay] = useState(true);
  const cookie = "onlyoffice_personal_cookie=true";  
  const setCookiesHandler = () => {
    document.cookie = cookie;
    setDisplay(!display);
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
        <Snackbar 
        display = {display} 
        text={t("This website uses cookies. By continuing to browse the website you agree to our ")}
        backGround = {"rgba(249,249,249,0.95)"}
        width = {"544px"}
        isButton = {true}
        buttonLabel={t("Got it!")}
        onClick ={setCookiesHandler}


        />       
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
