import { useState, useEffect } from "react";

export default function useLocalizedPrefixForLink(
  availableLanguages,
  currentLanguage
) {
  const [localizedPrefix, setLocalizedPrefix] = useState("");

  useEffect(() => {
    let prefix;

    if (!availableLanguages || !currentLanguage || currentLanguage === "en") {
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
