import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Text from "../../../../../components/text";
import Link from "../../../../../components/link";
import IconButton from "../../../../../components/icon-button";

import InfoPanel from "../../../../../components/info-panel";

const MobileAppPanel = () => {
  const headingComponent = (
    <Text>
      <Trans i18nKey="DownloadMobileApp">
        {" "}
        <Text as="span" fontWeight="bold"></Text>
      </Trans>
    </Text>
  );

  const linkComponents = [
    <Link
      key="app-store-link"
      to="https://apps.apple.com/app/onlyoffice-documents/id944896972"
      target="_self"
      style={{ width: "min-content", margin: "0 auto" }}
    >
      <IconButton
        size="min-content"
        iconName={`/apps-icons/en/appstore_white.react.svg`}
      />
    </Link>,
    <Link
      key="google-play-link"
      to="https://play.google.com/store/apps/details?id=com.onlyoffice.documents"
      target="_self"
      style={{ width: "min-content", margin: "0 auto" }}
    >
      <IconButton
        size="min-content"
        iconName={`/apps-icons/en/googleplay_white.react.svg`}
      />
    </Link>,
  ];

  return (
    <InfoPanel
      grayBackground
      imgUrl="/info-screenshots/en/mobile.react..svg"
      defaultImgUrl="/info-screenshots/en/mobile.react.svg"
      headingComponent={headingComponent}
      linkComponents={linkComponents}
    />
  );
};

export default MobileAppPanel;
