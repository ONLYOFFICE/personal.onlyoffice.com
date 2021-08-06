import React from "react";
import PropTypes from "prop-types";
import packages from "../../../package.json";

import Link from "../../../components/link";
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
                <Link
                  className={item.className}
                  href={item.href}
                  title={item.title}
                  rel={item.rel}
                  target="_blank"
                >
                  <IconButton
                    iconName={item.src}
                    size={item.size}
                    grayed={item.filter}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="item-personal-footer">
          <div className="personal-footer-links">
            <Link
              className="personal-footer-link"
              color="#444444"
              href={`https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=4543205&doc=VXlOK1NnMVdIYStuSFpMeFR4UVpmNE5VS3VTdENYdU50WjJ5Unh0OERiUT0_IjQ1NDMyMDUi0`}
              target="_blank"
            >
              {t("Terms of Service")}
            </Link>
            <Link
              color="#444444"
              href={`https://www.onlyoffice.com`}
              target="_blank"
            >
              {t("Corporate Use")}
            </Link>
          </div>
          <Text color="#444444" className="personal-footer_rights">
            {t("© Ascensio System SIA")} {currentYear}.{" "}
            {t("All rights reserved")}{" "}
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
  footerHomePage: PropTypes.bool,
};

FooterContent.defaultProps = {
  footerHomePage: false,
};

export default FooterContent;
