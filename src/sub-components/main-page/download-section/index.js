import React from "react";

import Heading from "../../../../components/heading";

import ChromeExtensionPanel from "./sub-components/chrome-extension-panel";
import DesktopAppPanel from "./sub-components/desktop-app-panel";
import MobileAppPanel from "./sub-components/mobile-app-panel";

import StyledDownloadSection from "./styled-download-section";

const DownloadSection = ({ t, language }) => {

  const localizedImages = ["ru", "de", "fr", "en"];

  let localizedPath = "en";

  localizedImages.map((languageKey) => {
    if (language.includes(languageKey)) {
      localizedPath = languageKey;
    }
    return false;
  });

  return (
    <StyledDownloadSection background="#f9f9f9">
      <Heading textAlign="center" level={2} className="download-heading">
        {t("AuthDocsOnlineDesktopMobile")}
      </Heading>
      <ChromeExtensionPanel
        className="download-info-panel"
        t={t}
        currentLanguage={localizedPath}
      />
      <DesktopAppPanel
        className="download-info-panel"
        t={t}
        currentLanguage={localizedPath}
      />
      <MobileAppPanel
        className="download-info-panel"
        t={t}
        currentLanguage={localizedPath}
      />
    </StyledDownloadSection>
  );
};

export default DownloadSection;
