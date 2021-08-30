import { useEffect, useState } from "react";

import { ValidationResult } from "../helpers/constants";
import { checkConfirmLink } from "../api";

export default function useCheckingConfirmLink(confirmLinkData, t) {
  const [isValid, setIsValid] = useState(null);
  const [errorText, setErrorText] = useState(null);

  useEffect(() => {
    checkConfirmLink(confirmLinkData)
      .then((validationResult) => {
        switch (validationResult) {
          case ValidationResult.Ok:
            setIsValid(true);
            setErrorText(null);
            break;
          case ValidationResult.Invalid:
            setIsValid(false);
            setErrorText(t("ConfirmInvalidLink"));
            break;
          case ValidationResult.Expired:
            setIsValid(false);
            setErrorText(t("ConfirmExpiredLink"));
            break;
          default:
            setIsValid(false);
            setErrorText(t("UnknownError"));
            break;
        }
      })
      .catch((e) => {
        setIsValid(false);
        setErrorText(e);
      });
  }, []);

  return [isValid, errorText];
}
