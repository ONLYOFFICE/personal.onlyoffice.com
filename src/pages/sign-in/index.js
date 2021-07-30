import React, { useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import Form from "../../../components/form";

import Head from "../../sub-components/head";
import HeaderContent from "../../sub-components/header-content";
import StyledSection from "../../sub-components/section";
import AdditionalSection from "../../sub-components/additional-section";
import SocialButtons from "../../sub-components/social-buttons";
import FormLink from "../../sub-components/form-link";
import FooterContent from "../../sub-components/footer-content";

const SignInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref =
    language === "en" ? "/create-now" : `/${language}/create-now`;

  const onEmailChangeHandler = (e, isValid) => {
    setEmailValue(e.target.value);
    setEmailIsValid(isValid);
  };

  const onPasswordChangeHandler = (e, isValid) => {
    setPasswordValue(e.target.value);
    setPasswordIsValid(isValid);
  };

  const changeCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const clickSocialButton = (e) => {};

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("onSubmit, valid: ", emailIsValid && passwordIsValid);
  };

  const formData = [
    { type: "heading", headingText: t("PersonalLogin"), isHeader: true },

    {
      type: "input",
      inputType: "email",
      placeholder: t("Email"),
      callback: onEmailChangeHandler,
      value: emailValue,
    },
    {
      type: "input",
      inputType: "password",
      placeholder: t("Password"),
      callback: onPasswordChangeHandler,
      value: passwordValue,
      autoComplete: "current-password",
    },
    {
      type: "checkbox",
      callback: changeCheckbox,
      isChecked: isChecked,
      label: t("Remember"),
    },
    {
      type: "button",
      callback: onSubmitHandler,
      isSubmit: true,
      toHideButton: false,
      typeButton: "primary",
      label: t("AuthDocsSignIn"),
    },
    {
      type: "other",
      element: (
        <FormLink
          key="pass-recovery-link"
          currentLanguage={language}
          href="password-recovery"
          label={t("AuthDocsForgotPswd")}
        />
      ),
    },
    { type: "separator", separatorText: t("AuthDocsEnterViaSocial") },
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
          textLabel={t("AuthDocsDontHave")}
          buttonHref={buttonHref}
          buttonLabel={t("RegistryButtonCreateNow")}
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

export default SignInPage;

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
