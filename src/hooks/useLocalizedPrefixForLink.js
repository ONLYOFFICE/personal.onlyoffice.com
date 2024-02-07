import { useState, useEffect } from "react";
import config from "../../config.json";

export default function useLocalizedPrefixForLink(
  availableLanguages,
  currentLanguage
) {
  const [localizedPrefix, setLocalizedPrefix] = useState("");

  useEffect(() => {
    let prefix;

    if (
      !availableLanguages ||
      !currentLanguage ||
      currentLanguage === config.defaultLanguage
    ) {
      prefix = "";
    } else {
      const language = availableLanguages.find((lang) =>
        currentLanguage.includes(lang)
      );

      prefix = language ? language : "";
    }

    setLocalizedPrefix(prefix);
  }, [availableLanguages, currentLanguage]);

  return localizedPrefix;
}
