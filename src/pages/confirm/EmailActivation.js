import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";

import { changeEmail, logout } from "../../api";
import {
  getConfirmHeader,
  getConfirmLinkData,
  checkingConfirmLink,
} from "../../helpers";
import withDetectLanguage from "../../helpers/withDetectLanguage";

const EmailActivationPage = ({ location }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  /* eslint-disable */
  useEffect(() => {
    const linkData = getConfirmLinkData(location);
    checkingConfirmLink(location, t).then((res) => {
      if (res.isValidLink) {
        const [email, uid] = [linkData.email, linkData.uid];
        const confirmHeader = getConfirmHeader(location);
        logout();
        changeEmail(uid, email, confirmHeader)
          .then((res) => {
            navigate("/", {
              state: {
                toastr: {
                  success: true,
                  text: t("ConfirmEmailActivated"),
                },
              },
            });
          })
          .catch((e) => {
            navigate("/", {
              state: {
                toastr: {
                  error: true,
                  text: t("ConfirmEmailActivationError"),
                },
              },
            });
          });
      } else {
        navigate("/", {
          state: {
            toastr: {
              error: true,
              text: res.errorValidationLink || t("ConfirmEmailActivationError"),
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

export default withDetectLanguage(EmailActivationPage);

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
