import React from "react";
import PropTypes from "prop-types";

import CustomLink from "../../../components/link";
import IconButton from "../../../components/icon-button";
import Text from "../../../components/text";

import StyledFooter from "./styled-footer-content";
import Social from "./sub-components/social-item";

const date = new Date();
const currentYear = date.getFullYear();

const FooterContent = (props) => {
  const { t, language, footerHomePage, ...rest } = props;

  return (
    <StyledFooter {...rest} footerHomePage={footerHomePage}>
      <div className="personal-footer">
        {footerHomePage && (
          <ul className="personal-social-links">
            {Social.map((item, i) => (
              <li key={i}>
                <CustomLink
                  className={item.className}
                  href={item.href}
                  target={item.target}
                  title={item.title}
                  rel={item.rel}
                  target="_blank"
                >
                  <IconButton
                    iconName={item.src}
                    size={item.size}
                    grayed={item.filter}
                  />
                </CustomLink>
              </li>
            ))}
          </ul>
        )}
        <div className="item-personal-footer">
          <div className="personal-footer-links">
            <CustomLink
              className="personal-footer-link"
              color="#444444"
              href={`/Terms.aspx`}
              target="_blank"
            >
              {t("Terms of Service")}
            </CustomLink>
            <CustomLink
              color="#444444"
              href={`https://www.onlyoffice.com`}
              target="_blank"
            >
              {t("Corporate Use")}
            </CustomLink>
          </div>
          <Text color="#444444" className="personal-footer_rights">
            {t("© Ascensio System SIA")} {currentYear}.{" "}
            {t("All rights reserved")}
          </Text>
        </div>
      </div>
    </StyledFooter>
  );
};

FooterContent.propTypes = {
  footerHomePage: PropTypes.bool,
};

FooterContent.defaultProps = {
  footerHomePage: false,
};

export default FooterContent;
