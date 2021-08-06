import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import Form from "../../../components/form";
import Icon from "../../../components/icon-button";

import Head from "../../sub-components/head";
import HeaderContent from "../../sub-components/header-content";
import StyledSection from "../../sub-components/section";
import FormDescription from "../../sub-components/form-description";
import FooterContent from "../../sub-components/footer-content";

import { navigate } from "gatsby";

const SuccessfullyPage = ({ location }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref =
    language === "en" ? "/create-now" : `/${language}/create-now`;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const formData = [
    {
      type: "other",
      element: (
        <Icon
          style={{ margin: "0 auto" }}
          iconName="/reg-success-checkmark.react.svg"
        />
      ),
    },
    {
      type: "heading",
      headingText: t("CreateSuccessfullyHeader"),
      isHeader: true,
    },
    {
      type: "other",
      element: (
        <FormDescription
          key="recovery-instructions"
          label={t("CreateSuccessfullyDesc", {
            email: location.state ? location.state.email : "",
          })}
        />
      ),
    },
    {
      type: "button",
      callback: onSubmitHandler,
      isSubmit: true,
      toHideButton: false,
      typeButton: "primary",
      label: t("CreateSuccessfullyButton"),
      tabIndexProp: 1,
    },
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
        <HeaderContent
          t={t}
          language={language}
          href={buttonHref}
          labelButton={t("RegistryButtonCreateNow")}
          headerText={t("AuthDocsDontHave")}
          toHideButton
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <StyledSection>
          <Form
            className="login-form"
            submitForm={onSubmitHandler}
            formData={formData}
          />
        </StyledSection>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <FooterContent t={t} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default SuccessfullyPage;

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