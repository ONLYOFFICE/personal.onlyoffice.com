import React from "react";

import InfoPanel, {
  ImageGroup,
  HeadingGroup,
  ButtonGroup,
} from "../../../../../components/info-panel";
import Text from "../../../../../components/text";
import IconButton from "../../../../../components/icon-button";
import Link from "../../../../../components/link";

const ChromeExtensionPanel = ({
  t,
  localizedScreenshotPrefix,
  localizedChromeStorePrefix,
}) => {
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
        iconName={`/site-assets/apps-icons/${localizedChromeStorePrefix}/chrome.react.svg`}
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
        imgUrl={`/site-assets/info-screenshots/${localizedScreenshotPrefix}/extension.png`}
      />
    </InfoPanel>
  );
};

export default ChromeExtensionPanel;
