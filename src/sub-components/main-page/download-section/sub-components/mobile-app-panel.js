import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Text from "../../../../../components/text";
import Link from "../../../../../components/link";
import IconButton from "../../../../../components/icon-button";

import InfoPanel, {
  ImageGroup,
  HeadingGroup,
  ButtonGroup,
} from "../../../../../components/info-panel";

const MobileAppPanel = ({ currentLanguage }) => {
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
        iconName={`/apps-icons/${currentLanguage}/appstore_white.react.svg`}
        defaultIcon="/apps-icons/en/appstore_white.react.svg"
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
        iconName={`/apps-icons/${currentLanguage}/googleplay_white.react.svg`}
        defaultIcon="/apps-icons/en/googleplay_white.react.svg"
      />
    </Link>,
  ];

  return (
    <InfoPanel
      grayBackground
      headingComponent={headingComponent}
      linkComponents={linkComponents}
    >
      <HeadingGroup className="panel-text mobile-text">
        {headingComponent}
      </HeadingGroup>
      <ButtonGroup className="panel-buttons mobile-button">
        {linkComponents}
      </ButtonGroup>
      <ImageGroup
        className="mobile-app-img panel-image"
        imgUrl={`/info-screenshots/${currentLanguage}/mobile.png`}
      />
    </InfoPanel>
  );
};

export default MobileAppPanel;
