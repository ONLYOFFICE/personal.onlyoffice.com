import React from "react";

import Text from "../../../../../components/text";
import IconButton from "../../../../../components/icon-button";
import Link from "../../../../../components/link";
import HeadingGroup from "./heading-group";
import ButtonGroup from "./button-group";

import StyledChromeExtensionPanel from "./styled-chrome-extension-panel";

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

  const contentComponent = [
    <HeadingGroup className="panel-text" key="heading-chrome-extension">
      {headingComponent}
    </HeadingGroup>,
    <ButtonGroup
      className="panel-buttons extension-button"
      key="button-chrome-extension"
    >
      {linkComponent}
    </ButtonGroup>,
  ];

  return (
    <StyledChromeExtensionPanel
      whiteBackground
      contentComponent={contentComponent}
      imageData={{
        className: "extension-img panel-image",
        imageUrl: `/site-assets/info-screenshots/${localizedScreenshotPrefix}/extension.png`,
      }}
    />
  );
};

export default ChromeExtensionPanel;
