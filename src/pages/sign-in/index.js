import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import HeaderContent from "../sub-components/header-content";

const SignInPage = () => {
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

export default SignInPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
