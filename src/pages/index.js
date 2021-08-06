import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../components/layout";

import CreateSection from "../sub-components/create-section";
import FooterContent from "../sub-components/footer-content";
import Head from "../sub-components/head";
import HeaderContent from "../sub-components/header-content";
import ReviewSection from "../sub-components/main-page/review-section";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  console.log(useTranslation());

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
          href="sign-in"
          labelButton={t("AuthDocsLogIn")}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CreateSection t={t} />
        <ReviewSection 
          header={t("Hear the web")}
          textFrontLink={t("The user reviews are taken from ")}
          textLink={t("Capterra.com")}
          hrefLink={t("https://www.capterra.com/")}
          textAfterLink={t(". Capterra reviews constitute the subjective opinions of individual end users based on their own experiences and do not represent the views of Capterra or its affiliates.")}
        />
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent 
          footerHomePage={true} 
          t={t} 
          TermsOfService={t("Terms of Service")}
          CorpseUse={t("Corporate Use")}
          SystemSIA={t("© Ascensio System SIA")}
          AllRight={t("All rights reserved")}
        />
      </Layout.PageFooter>
    </Layout>
  );
};

export default IndexPage;

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
