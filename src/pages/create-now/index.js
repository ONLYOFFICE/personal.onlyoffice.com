import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";

import Head from "../../sub-components/head";
import HeaderContent from "../../sub-components/header-content";
import StyledSection from "../../sub-components/section";
import FooterContent from "../../sub-components/footer-content";
import CreateForm from "../../sub-components/create-form";

const CreateNowPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref = language === "en" ? "/sign-in" : `/${language}/sign-in`;

  return (
    <Layout>
      <Layout.PageHead>
        <Head
          metaDescription={t("AuthDocsMetaDescription")}
          metaKeywords={t("AuthDocsMetaKeywords")}
          title={t("AuthDocsTitlePage")}
          metaDescriptionOg={t("MetaDescriptionOg")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent
          t={t}
          language={language}
          href={buttonHref}
          labelButton={t("AuthDocsSignIn")}
          headerText={t("AuthDocsAlready")}
          toHideButton
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection>
          <CreateForm t={t} buttonHref={buttonHref} />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default CreateNowPage;

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
