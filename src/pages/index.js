import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout";
import CreateSection from "../sub-components/main-page/create-section";
import Head from "../sub-components/head";
import HeaderContent from "../sub-components/header-content";
import CarouselSection from "../sub-components/main-page/carousel-section";
import withDetectLanguage from "../helpers/withDetectLanguage";
import showToastr from "../helpers/showToastr";

const CloudsSection = React.lazy(() =>
  import("../sub-components/main-page/clouds-section")
);
const DownloadSection = React.lazy(() =>
  import("../sub-components/main-page/download-section")
);
const BlockquoteSection = React.lazy(() =>
  import("../sub-components/main-page/blockquote-section")
);
const ReviewSection = React.lazy(() =>
  import("../sub-components/main-page/review-section")
);

const FooterSection = React.lazy(() =>
  import("../sub-components/footer-content")
);

const IndexPage = ({ location }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  /* eslint-disable */
  useEffect(() => {
    showToastr(location, t);
  }, []);

  useEffect(() => {
    const isDesktopClient = window["AscDesktopEditor"] !== undefined;
    if (isDesktopClient) {
      navigate("/sign-in");
    }
  }, []);
  /* eslint-enable */

  const isSSR = typeof window === "undefined";

  const lazyRender = () => {
    return (
      <>
        {!isSSR && (
          <React.Suspense fallback={<div />}>
            <CloudsSection textHeading={t("AuthDocsConnect")} />
            <DownloadSection t={t} language={language} />
            <BlockquoteSection
              text={t("SoftpediaDescription")}
              linkText={t("AuthDocsSoftpedia")}
            />
            <ReviewSection t={t} />
          </React.Suspense>
        )}
      </>
    );
  };

  const footerRender = () => {
    return (
      !isSSR && (
        <React.Suspense fallback={<div />}>
          <FooterSection t={t} isHomePage language={language} />
        </React.Suspense>
      )
    );
  };

  const content = lazyRender();
  const footer = footerRender();

  return (
    <Layout t={t}>
      <Layout.PageHead>
        <Head
          metaDescription={t("AuthDocsMetaDescription")}
          metaKeywords={t("AuthDocsMetaKeywords")}
          title={t("AuthDocsTitlePage")}
          metaDescriptionOg={t("MetaDescriptionOg")}
          currentLanguage={language}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent
          t={t}
          language={language}
          href="sign-in"
          labelButton={t("AuthDocsLogIn")}
          withoutButton
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <CreateSection t={t} currentLanguage={language} />
        <CarouselSection t={t} language={language} />
        {content}
      </Layout.SectionMain>
      <Layout.PageFooter isHomePage>{footer}</Layout.PageFooter>
    </Layout>
  );
};

export default withDetectLanguage(IndexPage);

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
