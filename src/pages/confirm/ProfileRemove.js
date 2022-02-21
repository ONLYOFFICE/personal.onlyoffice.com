import React, { useState, useEffect } from "react";
import { graphql, navigate } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import toastr from "../../../components/toast/toastr";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";
import Form from "../../../components/form";

import { deleteSelf, logout } from "../../api";
import FormDescription from "../../sub-components/form-description";
import Link from "../../../components/link";

import SuccessIcon from "../../../static/site-assets/icons/reg-success-checkmark.react.svg";
import AttentionIcon from "../../../static/site-assets/icons/attention.react.svg";

import { getConfirmHeader, checkingConfirmLink } from "../../helpers";
import withDetectLanguage from "../../helpers/withDetectLanguage";

const ProfileRemovePage = ({ location }) => {
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  /* eslint-disable */
  useEffect(() => {
    checkingConfirmLink(location, t).then((res) => {
      if (!res.isValidLink) {
        navigate("/", {
          state: {
            toastr: {
              error: true,
              text: res.errorValidationLink || t("UnknownError"),
            },
          },
        });
      }
    });
  }, []);
  /* eslint-enable */

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isDeleteClicked) return;
    setIsDeleteClicked(true);

    const confirmHeader = getConfirmHeader(location);
    logout();

    deleteSelf(confirmHeader)
      .then((res) => {
        setIsProfileDeleted(true);
        toastr.success(t("DeleteProfileSuccess"));
      })
      .catch((e) => toastr.error(`${e}`))
      .finally(() => setIsDeleteClicked(false));
  };

  const DeleteProfileDesc = (
    <Trans
      i18nKey={
        isProfileDeleted
          ? "ConfirmDeleteAccountSuccessDesc"
          : "ConfirmDeleteAccountDesc"
      }
    >
      {" "}
      <Link href="https://www.onlyoffice.com/legalterms.aspx"> </Link>
    </Trans>
  );

  const FormButton = isProfileDeleted
    ? null
    : {
        type: "button",
        callback: onSubmitHandler,
        isSubmit: true,
        typeButton: "primary",
        label: t("ConfirmDeleteAccountButton"),
        tabIndexProp: 1,
        isDisabled: isDeleteClicked,
      };

  const formData = [
    {
      type: "other",
      element: isProfileDeleted ? (
        <SuccessIcon key="other-success" style={{ margin: "0 auto" }} />
      ) : (
        <AttentionIcon key="other-attention" style={{ margin: "0 auto" }} />
      ),
    },
    {
      type: "heading",
      headingText: isProfileDeleted
        ? t("ConfirmDeleteAccountSuccessHeader")
        : t("ConfirmDeleteAccountHeader"),
      isHeader: true,
    },
    {
      type: "other",
      element: (
        <FormDescription key="delete-profile-desc" label={DeleteProfileDesc} />
      ),
    },
    { ...FormButton },
  ];

  return (
    <Layout t={t}>
      <Layout.PageHead>
        <Head
          metaDescription={t("AuthDocsMetaDescription")}
          metaKeywords={t("AuthDocsMetaKeywords")}
          title={t("ConfirmTitle")}
          metaDescriptionOg={t("MetaDescriptionOg")}
          currentLanguage={language}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent t={t} language={language} withoutButton />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection>
          <Form formData={formData} className="login-form" />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default withDetectLanguage(ProfileRemovePage);

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
