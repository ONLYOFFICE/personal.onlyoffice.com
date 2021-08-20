import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ErrorContainer from "../../components/error-container";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <ErrorContainer
      headerText={t("Error404HeaderText")}
      bodyText={t("Error404BodyText")}
      buttonText={t("ErrorPageButtonText")}
      buttonUrl="/"
    />
  );
};

export default NotFoundPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { in: [$language, "en"] } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
