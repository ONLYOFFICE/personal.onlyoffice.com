import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import InfoPanel, {
  ImageGroup,
  HeadingGroup,
  ButtonGroup,
} from "../../../../../components/info-panel";
import Text from "../../../../../components/text";
import IconButton from "../../../../../components/icon-button";
import Link from "../../../../../components/link";

const ChromeExtensionPanel = ({ currentLanguage, t }) => {
  const extensionText = t("DownloadExtensionChrome");
  const header = t("DownloadExtensionHeader");

  const headingComponent = (
    <Text fontWeight="bold">
      {header}
      <Text as="span">{extensionText}</Text>
    </Text>
  );

  const linkComponent = [
    <Link
      key="extension-link"
      href="https://chrome.google.com/webstore/detail/onlyoffice/ohdlcmpahmacjddiaokoogleflddlahc"
      className="icon-button-style"
      style={{ width: "min-content", margin: "0 auto" }}
    >
      <IconButton
        size="auto"
        className="extension-icon-component"
        iconName={`/site-assets/apps-icons/${currentLanguage}/chrome.react.svg`}
        defaultIcon={`/site-assets/apps-icons/en/chrome.react.svg`}
      />
    </Link>,
  ];

  return (
    <InfoPanel whiteBackground>
      <HeadingGroup className="panel-text extension-text">
        {headingComponent}
      </HeadingGroup>
      <ButtonGroup className="panel-buttons extension-button">
        {linkComponent}
      </ButtonGroup>
      <ImageGroup
        className="extension-img panel-image"
        imgUrl={`/site-assets/info-screenshots/${currentLanguage}/extension.png`}
      />
    </InfoPanel>
  );
};

export default ChromeExtensionPanel;
