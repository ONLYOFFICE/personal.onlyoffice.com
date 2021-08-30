import React, { useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";

import { useCheckingConfirmLink } from "../../hooks";

import { changeEmail, logout } from "../../api";
import { getConfirmHeader, getConfirmLinkData } from "../../helpers";

const EmailActivationPage = ({ location }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const linkData = getConfirmLinkData(location);
  const [isValid, errorText] = useCheckingConfirmLink(linkData, t);

  useEffect(() => {
    if (isValid) {
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
            text: errorText || t("ConfirmEmailActivationError"),
          },
        },
      });
    }
  });

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
        <StyledSection></StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default EmailActivationPage;

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
