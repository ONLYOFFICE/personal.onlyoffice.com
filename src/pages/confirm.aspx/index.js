import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import * as queryString from "query-string";

import Layout from "../../../components/layout";
import FooterContent from "../../sub-components/footer-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";

import JoinFrom from "../../sub-components/confirm/join";

const ConfirmPage = ({ location }) => {
  const { t } = useTranslation();

  const params = queryString.parse(location.search);

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
      <Layout.SectionMain>
        <StyledSection>
          <JoinFrom queryParams={params} t={t} />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default ConfirmPage;

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
