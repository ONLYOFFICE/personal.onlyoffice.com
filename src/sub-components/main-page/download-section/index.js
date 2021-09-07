import React from "react";

import Heading from "../../../../components/heading";

import ChromeExtensionPanel from "./sub-components/chrome-extension-panel";
import DesktopAppPanel from "./sub-components/desktop-app-panel";
import MobileAppPanel from "./sub-components/mobile-app-panel";

import StyledDownloadSection from "./styled-download-section";
import { getLocalizedImagePrefix } from "../../../helpers";

const localizedImages = ["ru", "de", "fr", "en"];

const DownloadSection = ({ t, language }) => {
  const localizedScreenshotPrefix = getLocalizedImagePrefix(
    localizedImages,
    language
  );

  return (
    <StyledDownloadSection background="#f9f9f9">
      <Heading textAlign="center" level={2} className="download-heading">
        {t("AuthDocsOnlineDesktopMobile")}
      </Heading>
      <ChromeExtensionPanel
        className="download-info-panel"
        t={t}
        currentLanguage={language}
        localizedScreenshotPrefix={localizedScreenshotPrefix}
      />
      <DesktopAppPanel
        className="download-info-panel"
        t={t}
        localizedScreenshotPrefix={localizedScreenshotPrefix}
      />
      <MobileAppPanel
        className="download-info-panel"
        t={t}
        currentLanguage={language}
        localizedScreenshotPrefix={localizedScreenshotPrefix}
      />
    </StyledDownloadSection>
  );
};

export default DownloadSection;
