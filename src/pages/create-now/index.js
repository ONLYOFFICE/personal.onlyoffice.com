import React, { useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import Form from "../../../components/form";

import Head from "../sub-components/head";
import HeaderContent from "../sub-components/header-content";
import StyledSection from "../sub-components/section";
import AdditionalSection from "../sub-components/additional-section";
import SocialButtons from "../sub-components/social-buttons";
import LicenceLink from "../sub-components/license";
import FooterContent from "../sub-components/footer-content";

const CreateNowPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [isSubscribe, setIsChecked] = useState(true);
  const [isAcceptLicence, setIsLicense] = useState(false);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref = language === "en" ? "/sign-in" : `/${language}/sign-in`;

  const onEmailChangeHandler = (e, isValid) => {
    setEmailValue(e.target.value);
    setEmailIsValid(isValid);
  };

  const changeSubscribe = (e) => {
    setIsChecked(e.target.checked);
  };

  const changeAcceptLicense = (e) => {
    setIsLicense(e.target.checked);
  };

  const clickSocialButton = (e) => {};

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("onSubmit, valid: ", emailIsValid);
  };

  const formData = [
    { type: "heading", headingText: t("PersonalLogin"), isHeader: true },

    {
      type: "input",
      inputType: "email",
      placeholder: t("AuthDocsYourEmail"),
      callback: onEmailChangeHandler,
      value: emailValue,
    },
    {
      type: "checkbox",
      callback: changeSubscribe,
      isChecked: isSubscribe,
      label: t("RegistrySettingSpam"),
    },
    {
      type: "checkbox",
      callback: changeAcceptLicense,
      isChecked: isAcceptLicence,
      label: <LicenceLink t={t} />,
    },
    {
      type: "button",
      callback: onSubmitHandler,
      isSubmit: true,
      toHideButton: false,
      typeButton: "primary",
      label: t("RegistryButtonCreateNow"),
    },
    { type: "separator", separatorText: t("AuthDocsOr") },
    {
      type: "other",
      element: (
        <SocialButtons
          key="social-buttons"
          clickSocialButton={clickSocialButton}
        />
      ),
    },
    {
      type: "other",
      element: (
        <AdditionalSection
          key="additional"
          textLabel={t("AuthDocsAlready")}
          buttonHref={buttonHref}
          buttonLabel={t("AuthDocsSignIn")}
        />
      ),
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
          labelButton={t("AuthDocsSignIn")}
          headerText={t("AuthDocsAlready")}
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

export default CreateNowPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
