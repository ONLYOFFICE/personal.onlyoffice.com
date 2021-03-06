import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";

import { changeEmail, getUser } from "../../api";
import {
  parseQueryParams,
  getConfirmHeader,
  checkingConfirmLink,
} from "../../helpers";
import withDetectLanguage from "../../helpers/withDetectLanguage";

const EmailChangePage = ({ location }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  /* eslint-disable */
  useEffect(() => {
    checkingConfirmLink(location, t).then((res) => {
      if (res.isValidLink) {
        const params = parseQueryParams(location.search);
        const confirmHeader = getConfirmHeader(location);
        const { email } = params;
        getUser(email)
          .then((user) => {
            changeEmail(user.id, email, confirmHeader).then((res) => {
              window.location.replace("/");
            });
          })
          .catch((e) => {
            navigate("/", {
              state: {
                toastr: {
                  error: true,
                  text: t("EmailChangeError"),
                },
              },
            });
          });
      } else {
        navigate("/", {
          state: {
            toastr: {
              error: true,
              text: res.errorValidationLink || t("EmailChangeError"),
            },
          },
        });
      }
    });
  }, []);
  /* eslint-enable */

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
        <HeaderContent t={t} language={language} withoutButton />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection style={{ height: "100vh" }}></StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default withDetectLanguage(EmailChangePage);

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
