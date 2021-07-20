import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import HeaderContent from "../sub-components/header-content";

const PasswordRecoveryPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref =
    language === "en" ? "/create-now" : `/${language}/create-now`;

  return (
    <Layout>
      <Layout.PageHeader>
        <HeaderContent
          t={t}
          language={language}
          href={buttonHref}
          labelButton={t("RegistryButtonCreateNow")}
          headerText={t("AuthDocsDontHave")}
          toHideButton
        />
      </Layout.PageHeader>
    </Layout>
  );
};

export default PasswordRecoveryPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translations", "fallback"] }
        language: { eq: $language }
      }
    ) {
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
