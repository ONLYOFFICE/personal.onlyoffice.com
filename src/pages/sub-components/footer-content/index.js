import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import ExternalLink from "../../../../components/external-link";
import IconButton from "../../../../components/icon-button";
import Text from "../../../../components/text";

import StyledFooter from "./styled-footer-content";
import Social from "./sub-components/social-item";

const date = new Date();
const currentYear = date.getFullYear();

const FooterContent = (props) => {
  const { t, language, footerHomePage, ...rest } = props;

  const homepagePath = language === "en" ? "/" : `/${language}`;

  return(      
    <StyledFooter {...rest}>                  
        {footerHomePage &&
            <ul className="social-links">                             
                {Social.map((item, i) => 
                    <li key={i}>
                        <ExternalLink 
                            className={item.className} 
                            href={item.href} 
                            target={item.target}
                            title={item.title}
                            rel={item.rel}
                        >                                          
                            <IconButton 
                                iconName={item.src}                                                  
                                size={item.size}
                                grayed={item.filter}
                            />
                        </ExternalLink>
                    </li>
                )}                                   
            </ul>
        }
        <div className="item-personal-footer">
            <div className="personal-footer-links">
                <Link to={`${homepagePath}/Terms.aspx`}>{t("Terms of Service")}</Link>
                <ExternalLink href={`https://www.onlyoffice.com${homepagePath}/`}>{t("Corporate Use")}</ExternalLink>
            </div>
                <Text className="personal-footer_rights">
                    {t("© Ascensio System SIA")} {currentYear} {t("Resource.AllRightsReserved")}
                </Text>
        </div>                    
    </StyledFooter>           
    ); 
}

FooterContent.propTypes = {
    footerHomePage: PropTypes.bool
}

FooterContent.defaultProps = {
    footerHomePage: false
}
  
export default FooterContent;