import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Error404 } from "../../components/errors";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return <Error404 t={t} />;
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
