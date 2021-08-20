import React from "react";
import ErrorContainer from "../../error-container";

const Error404 = ({ t }) => {
  return (
    <ErrorContainer
      headerText={t("Error404HeaderText")}
      bodyText={t("Error404BodyText")}
      buttonText={t("Error404PageButtonText")}
      buttonUrl="/"
    />
  );
};

export default Error404;
