import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Text from "../../../../../components/text";
import Link from "../../../../../components/link";
import Button from "../../../../../components/button";

import HeadingGroup from "./heading-group";
import ButtonGroup from "./button-group";
import StyledDesktopAppPanel from "./styled-desktop-app-panel";

import useLocalizedPrefixForLink from "../../../../hooks/useLocalizedPrefixForLink";
import { availableLinkLanguages } from "../../../../helpers/constants";

const DesktopAppPanel = ({ t, localizedScreenshotPrefix, currentLanguage }) => {
  const localizedPrefix = useLocalizedPrefixForLink(
    availableLinkLanguages,
    currentLanguage
  );

  const headingComponent = (
    <Text>
      <Trans i18nKey="AuthDocsFreeDesktopApp">
        {" "}
        <Text as="span" fontWeight="bold"></Text>
      </Trans>
    </Text>
  );

  const linkComponents = [
    <Link
      className="desktop-link"
      key="desktop-app"
      href={`https://www.onlyoffice.com/${
        localizedPrefix ? localizedPrefix + "/" : ""
      }download-desktop.aspx`}
    >
      <Button
        className="desktop-button-component download-section-icon-component"
        themeButton={false}
        textColorHover="#ffffff"
        borderColorHover="#ffffff"
        backgroundColorHover="transparent"
        width="max-content"
        typeButton="transparent"
        label={t("AuthDocsDownload")}
        minwidth="130px"
        isScale
      />
    </Link>,
  ];

  const contentComponent = [
    <HeadingGroup className="panel-text desktop-text" key="heading-desktop-app">
      {headingComponent}
    </HeadingGroup>,
    <ButtonGroup
      className="panel-buttons desktop-button"
      key="button-desktop-app"
    >
      {linkComponents}
    </ButtonGroup>,
  ];

  return (
    <StyledDesktopAppPanel
      orangeBackground
      imageOnLeft
      contentComponent={contentComponent}
      imageData={{
        className: "panel-image desktop-image",
        imageUrl: `/site-assets/info-screenshots/${localizedScreenshotPrefix}/desktop.png`,
      }}
    />
  );
};

export default DesktopAppPanel;
