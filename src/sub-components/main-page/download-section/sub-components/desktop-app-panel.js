import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Text from "../../../../../components/text";
import Link from "../../../../../components/link";
import Button from "../../../../../components/button";

import InfoPanel, {
  ImageGroup,
  HeadingGroup,
  ButtonGroup,
} from "../../../../../components/info-panel";

const DesktopAppPanel = ({ t, currentLanguage }) => {
  const headingComponent = (
    <Text>
      <Trans i18nKey="DownloadDesktopApp">
        {" "}
        <Text as="span" fontWeight="bold"></Text>
      </Trans>
    </Text>
  );

  const linkComponents = [
    <Link
      className="desktop-link"
      key="desktop-app"
      href="https://www.onlyoffice.com/download-desktop.aspx"
    >
      <Button
        className="desktop-button-component"
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

  return (
    <InfoPanel orangeBackground imageOnLeft>
      <HeadingGroup className="panel-text desktop-text">
        {headingComponent}
      </HeadingGroup>
      <ButtonGroup className="panel-buttons desktop-button">
        {linkComponents}
      </ButtonGroup>
      <ImageGroup
        className="panel-image desktop-image"
        imgUrl={`/info-screenshots/${currentLanguage}/desktop.react.svg`}
        defaultImgUrl="/info-screenshots/en/desktop.react.svg"
      />
    </InfoPanel>
  );
};

export default DesktopAppPanel;
