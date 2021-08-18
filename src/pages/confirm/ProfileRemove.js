import React, { useState } from "react";
import { graphql } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import toastr from "../../../components/toast/toastr";

import FooterContent from "../../sub-components/footer-content";
import HeaderContent from "../../sub-components/header-content";
import Head from "../../sub-components/head";
import StyledSection from "../../sub-components/section";
import Form from "../../../components/form";

import { deleteSelf } from "../../api";
import { parseQueryParams } from "../../helpers";
import IconButton from "../../../components/icon-button";
import FormDescription from "../../sub-components/form-description";
import Link from "../../../components/link";

const ProfileRemovePage = ({ location }) => {
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const params = parseQueryParams(location.search);

  const onSubmitHandler = () => {
    deleteSelf(params.key)
      .then((res) => {
        setIsProfileDeleted(true);
        console.log("success delete", res);
      })
      .catch((e) => {
        toastr.error(`${e}`);
      });
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
      };

  const formData = [
    {
      type: "other",
      element: (
        <IconButton
          style={{ margin: "0 auto" }}
          iconName={
            isProfileDeleted
              ? "/reg-success-checkmark.react.svg"
              : "/attention.react.svg"
          }
        />
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
        <StyledSection>
          <Form formData={formData} className="login-form" />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default ProfileRemovePage;

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
