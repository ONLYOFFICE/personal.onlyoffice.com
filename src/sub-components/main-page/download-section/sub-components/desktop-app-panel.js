import React, { useEffect, useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import Text from "../../../../../components/text";
import Link from "../../../../../components/link";
import Button from "../../../../../components/button";

import InfoPanel from "../../../../../components/info-panel";

const DesktopAppPanel = ({ t }) => {
  const [isScaleButton, setIsScaleButton] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth <= 592) {
      setIsScaleButton(true);
      console.log("here");
    } else {
      setIsScaleButton(false);
      console.log("here");
    }
  }, []);

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
      key="desktop-app"
      href="https://www.onlyoffice.com/ru/download-desktop.aspx"
    >
      <Button
        themeButton={false}
        textColorHover="#ffffff"
        borderColorHover="#ffffff"
        backgroundColorHover="transparent"
        width="max-content"
        typeButton="transparent"
        label={t("AuthDocsDownload")}
        minwidth="130px"
        isScale={true}
      />
    </Link>,
  ];

  return (
    <InfoPanel
      orangeBackground
      imgLeft
      imgUrl="/info-screenshots/en/desktop.react.svg"
      defaultImgUrl="/info-screenshots/en/desktop.react.svg"
      headingComponent={headingComponent}
      linkComponents={linkComponents}
    />
  );
};

export default DesktopAppPanel;
