import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import InfoPanel from "../../../../../components/info-panel";
import Text from "../../../../../components/text";
import IconButton from "../../../../../components/icon-button";
import Link from "../../../../../components/link";

const ChromeExtensionPanel = () => {
  const headingComponent = (
    <Text fontWeight="bold">
      <Trans i18nKey="DownloadExtensionChrome">
        {" "}
        <Text as="span"> </Text>
      </Trans>
    </Text>
  );

  const linkComponent = [
    <Link
      key="extension-link"
      href="https://chrome.google.com/webstore/detail/onlyoffice/ohdlcmpahmacjddiaokoogleflddlahc"
      target="_self"
      className="icon-button-style"
      style={{ width: "min-content", margin: "0 auto" }}
    >
      <IconButton size="auto" iconName={`/apps-icons/en/chrome.react.svg`} />
    </Link>,
  ];

  return (
    <InfoPanel
      whiteBackground
      headingComponent={headingComponent}
      linkComponents={linkComponent}
      imgUrl="/info-screenshots/en/extension.react..svg"
      defaultImgUrl="/info-screenshots/en/extension.react.svg"
    />
  );
};

export default ChromeExtensionPanel;
