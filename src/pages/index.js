import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../components/layout";
import toastr from "../../components/toast/toastr";

import CreateSection from "../sub-components/main-page/create-section";
import FooterContent from "../sub-components/footer-content";
import Head from "../sub-components/head";
import HeaderContent from "../sub-components/header-content";
import CarouselSection from "../sub-components/main-page/carousel-section";
import ReviewSection from "../sub-components/main-page/review-section";
import CloudsSection from "../sub-components/main-page/clouds-section";
import BlockquoteSection from "../sub-components/main-page/blockquote-section";
import DownloadSection from "../sub-components/main-page/download-section";

import withDetectLanguage from "../helpers/withDetectLanguage";

const IndexPage = ({ location }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    const isDesktopClient = window["AscDesktopEditor"] !== undefined;
    if (isDesktopClient) {
      navigate("/sign-in");
    }
  }, []);

  useEffect(() => {
    if (location.state && location.state.hasOwnProperty("toastr")) {
      if (location.state.toastr.success) {
        toastr.success(location.state.toastr.text);
      }
      if (location.state.toastr.error) {
        toastr.error(location.state.toastr.text);
      }
    }
  }, [location.state]);

  return (
    <Layout t={t}>
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
        <CreateSection t={t} currentLanguage={language} />
        <CarouselSection t={t} language={language} />
        <CloudsSection textHeading={t("AuthDocsConnect")} />
        <DownloadSection t={t} language={language} />
        <BlockquoteSection
          text={t("SoftpediaDescription")}
          linkText={t("AuthDocsSoftpedia")}
        />
        <ReviewSection t={t} />
      </Layout.SectionMain>
      <Layout.PageFooter isHomePage>
        <FooterContent t={t} isHomePage language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default withDetectLanguage(IndexPage);

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
