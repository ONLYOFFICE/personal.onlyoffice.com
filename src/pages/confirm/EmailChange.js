import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";

import { changeEmail, getUser } from "../../api";
import { parseQueryParams, getConfirmHeader } from "../../helpers";

const EmailChangePage = ({ location }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  useEffect(() => {
    // const params = parseQueryParams(location.search);
    // const confirmHeader = getConfirmHeader(location);
    navigate("/", {
      state: {
        toastr: {
          error: true,
          text: t("EmailChangeError"),
        },
      },
    });
    // const { email } = params;
    // //getUser(email)
    // //.then((user) => {
    // changeEmail(params.key, email, confirmHeader)
    //   .then((res) => {
    //     console.log(res);
    //     // navigate("/", {
    //     //   state: {
    //     //     toastr: {
    //     //       success: true,
    //     //       text: t("EmailChanged"),
    //     //     },
    //     //   },
    //     // });
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     // navigate("/", {
    //     //   state: {
    //     //     toastr: {
    //     //       error: true,
    //     //       text: t("EmailChangeError"),
    //     //     },
    //     //   },
    //     // });
    //   });
  });

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
        <HeaderContent t={t} language={language} withoutButton />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection></StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default EmailChangePage;

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
