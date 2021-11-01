import React from "react";
import PropTypes from "prop-types";
import packages from "../../../package.json";

import CustomLink from "../../../components/link";
import IconButton from "../../../components/icon-button";
import Text from "../../../components/text";

import StyledFooter from "./styled-footer-content";
import Social from "./sub-components/social-item";

import useLocalizedPrefixForLink from "../../hooks/useLocalizedPrefixForLink";
import { availableLinkLanguages } from "../../helpers/constants";

const date = new Date();
const currentYear = date.getFullYear();

const FooterContent = ({ t, language, isHomePage, ...rest }) => {
  const localizedPrefix = useLocalizedPrefixForLink(
    availableLinkLanguages,
    language
  );

  return (
    <StyledFooter
      {...rest}
      isHomePage={isHomePage}
      countSocialLink={Social.length}
    >
      <div className="personal-footer">
        {isHomePage && (
          <div className="personal-social-links">
            {Social.map((item, i) => (
              <CustomLink
                className={item.className}
                href={item.href}
                title={item.title}
                rel={item.rel}
                target="_blank"
                key={item.title}
              >
                <IconButton
                  iconName={item.src}
                  size={item.size}
                  grayed={item.filter}
                />
              </CustomLink>
            ))}
          </div>
        )}
        <div className="item-personal-footer">
          <div className="personal-footer-links">
            <CustomLink
              className="personal-footer-link"
              color="#444444"
              href={`https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=4543205&doc=VXlOK1NnMVdIYStuSFpMeFR4UVpmNE5VS3VTdENYdU50WjJ5Unh0OERiUT0_IjQ1NDMyMDUi0`}
              target="_blank"
            >
              {t("TermsOfService")}
            </CustomLink>
            <CustomLink
              className="personal-footer-link"
              color="#444444"
              href={`https://www.onlyoffice.com/${localizedPrefix}`}
              target="_blank"
            >
              {t("CorporateUse")}
            </CustomLink>
          </div>
          <Text
            color="#444444"
            className="personal-footer_rights"
            fontSize="14px"
          >
            {t("CopyrightAndRights", { currentYear })}
            <span style={{ color: "#f9f9f9" }}>{
              //TODO: deleted before release
              `(v.${packages.version})`
            }</span>
          </Text>
        </div>
      </div>
    </StyledFooter>
  );
};

FooterContent.propTypes = {
  isHomePage: PropTypes.bool,
};

FooterContent.defaultProps = {
  isHomePage: false,
};

export default FooterContent;
