import React from "react";

import Heading from "../../../../components/heading";

import ChromeExtensionPanel from "./sub-components/chrome-extension-panel";
import DesktopAppPanel from "./sub-components/desktop-app-panel";
import MobileAppPanel from "./sub-components/mobile-app-panel";

import StyledDownloadSection from "./styled-download-section";
const DownloadSection = ({ t, language }) => {
  return (
    <StyledDownloadSection background="#f9f9f9">
      <Heading textAlign="center" level={2} className="download-heading">
        {t("AuthDocsOnlineDesktopMobile")}
      </Heading>
      <ChromeExtensionPanel
        className="download-info-panel"
        t={t}
        currentLanguage={language}
      />
      <DesktopAppPanel
        className="download-info-panel"
        t={t}
        currentLanguage={language}
      />
      <MobileAppPanel
        className="download-info-panel"
        t={t}
        currentLanguage={language}
      />
    </StyledDownloadSection>
  );
};

export default DownloadSection;
