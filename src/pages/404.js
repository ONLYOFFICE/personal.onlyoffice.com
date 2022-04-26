import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Error404 } from "../../components/errors";
import Head from "../sub-components/head";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head
        metaDescription={t("AuthDocsMetaDescription")}
        metaKeywords={t("AuthDocsMetaKeywords")}
        title={t("AuthDocsTitlePage")}
        metaDescriptionOg={t("MetaDescriptionOg")}
      />
      <Error404 t={t} />
    </>
  );
};

export default NotFoundPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { in: [$language, "en-US"] } }) {
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
