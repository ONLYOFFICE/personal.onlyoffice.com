import React from "react";

import Heading from "../../../../components/heading";

import ChromeExtensionPanel from "./sub-components/chrome-extension-panel";
import DesktopAppPanel from "./sub-components/desktop-app-panel";
import MobileAppPanel from "./sub-components/mobile-app-panel";

import StyledDownloadSection from "./styled-download-section";
import { getLocalizedImagePrefix } from "../../../helpers";

const localizedImages = ["ru", "de", "fr", "en-US"];
const localizedAppsIcons = [
  "zh",
  "cs",
  "de",
  "en-US",
  "es",
  "fr",
  "it",
  "ja",
  "nl",
  "pt",
  "ru",
];
const localizedChromeStore = ["en-US", "ru", "es", "pt", "it", "de", "fr"];

const DownloadSection = ({ t, language }) => {
  const localizedScreenshotPrefix = getLocalizedImagePrefix(
    localizedImages,
    language
  );

  const localizedAppsIconsPrefix = getLocalizedImagePrefix(
    localizedAppsIcons,
    language
  );

  const localizedChromeStorePrefix = getLocalizedImagePrefix(
    localizedChromeStore,
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
        localizedScreenshotPrefix={localizedScreenshotPrefix}
        localizedChromeStorePrefix={localizedChromeStorePrefix}
      />
      <DesktopAppPanel
        className="download-info-panel"
        t={t}
        localizedScreenshotPrefix={localizedScreenshotPrefix}
        currentLanguage={language}
      />
      <MobileAppPanel
        className="download-info-panel"
        t={t}
        localizedScreenshotPrefix={localizedScreenshotPrefix}
        localizedAppsIconsPrefix={localizedAppsIconsPrefix}
      />
    </StyledDownloadSection>
  );
};

export default DownloadSection;
