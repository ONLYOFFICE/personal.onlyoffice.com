import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Text from "../../../../../components/text";
import Link from "../../../../../components/link";
import IconButton from "../../../../../components/icon-button";

import HeadingGroup from "./heading-group";
import ButtonGroup from "./button-group";

import StyledMobileAppPanel from "./styled-mobile-app-panel";

const MobileAppPanel = ({
  localizedScreenshotPrefix,
  localizedAppsIconsPrefix,
}) => {
  const headingComponent = (
    <Text>
      <Trans i18nKey="AuthDocsWorkWithDocs">
        {" "}
        <Text as="span" fontWeight="bold"></Text>
      </Trans>
    </Text>
  );

  const linkComponents = [
    <Link
      key="app-store-link"
      href="https://apps.apple.com/app/onlyoffice-documents/id944896972"
      target="_self"
      style={{ width: "min-content", margin: "0 auto" }}
    >
      <IconButton
        className="download-section-icon-component"
        size="min-content"
        iconName={`/site-assets/apps-icons/${localizedAppsIconsPrefix}/appstore_white.react.svg`}
        defaultIcon="/site-assets/apps-icons/en/appstore_white.react.svg"
      />
    </Link>,
    <Link
      key="google-play-link"
      href="https://play.google.com/store/apps/details?id=com.onlyoffice.documents"
      target="_self"
      style={{ width: "min-content", margin: "0 auto" }}
    >
      <IconButton
        className="download-section-icon-component"
        size="min-content"
        iconName={`/site-assets/apps-icons/${localizedAppsIconsPrefix}/googleplay_white.react.svg`}
        defaultIcon="/site-assets/apps-icons/en/googleplay_white.react.svg"
      />
    </Link>,
  ];

  const contentComponent = [
    <HeadingGroup className="panel-text mobile-text" key="heading-mobile-app">
      {headingComponent}
    </HeadingGroup>,
    <ButtonGroup
      className="panel-buttons mobile-button"
      key="button-mobile-app"
    >
      {linkComponents}
    </ButtonGroup>,
  ];

  return (
    <StyledMobileAppPanel
      grayBackground
      contentComponent={contentComponent}
      imageData={{
        className: "mobile-app-img panel-image",

        imageUrl: `/site-assets/info-screenshots/${localizedScreenshotPrefix}/mobile.png`,
      }}
    />
  );
};

export default MobileAppPanel;
