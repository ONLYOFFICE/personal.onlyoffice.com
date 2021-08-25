import React from "react";
import ErrorContainer from "../../error-container";

const Error520 = ({ t }) => {
  return (
    <ErrorContainer
      headerText={t("SomethingWentWrong")}
      bodyText={t("TryLatter")}
      buttonText={t("Error404PageButtonText")}
      buttonUrl="/"
    />
  );
};

export default Error520;
