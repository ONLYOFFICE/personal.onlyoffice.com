import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import Form from "../../../components/form";

import AdditionalSection from "../../sub-components/additional-section";
import FooterContent from "../../sub-components/footer-content";
import FormLink from "../../sub-components/form-link";
import Head from "../../sub-components/head";
import HeaderContent from "../../sub-components/header-content";
import StyledSection from "../../sub-components/section";
import SocialButtons from "../../sub-components/social-buttons";

import { getSettings, login, getUser } from "../../api";

import createPasswordHash from "../../helpers/createPasswordHash";
//import languages from "../../../languages.json";

const SignInPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const [hashSettings, setHashSettings] = useState();

  useEffect(() => {
    getSettings()
      .then((res) => {
        setHashSettings(res.passwordHash);
      })
      .catch((e) => console.error(e));
  }, []);

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

    if (!passwordValue || !emailValue) return;

    const hash = createPasswordHash(passwordValue, hashSettings);

    if (emailIsValid && passwordIsValid) {
      login(emailValue, hash)
        .then(getUser)
        // .then((user) => {
        //   // const currentLanguage = languages.find(
        //   //   (el) => el.shortKey === language
        //   // );
        //   // updateUserCulture(user.id, currentLanguage?.key || "ru-RU");
        // })
        .then(() => window.open("/", "_self"))
        .catch((e) => console.log(e));
    } else {
      console.log("not valid");
    }
  };

  const formData = [
    { type: "heading", headingText: t("PersonalLogin"), isHeader: true },

    {
      type: "input",
      inputType: "email",
      placeholder: t("Email"),
      callback: onEmailChangeHandler,
      value: emailValue,
      tabIndexProp: 1,
      isAutoFocussed: true,
    },
    {
      type: "input",
      inputType: "password",
      placeholder: t("Password"),
      callback: onPasswordChangeHandler,
      value: passwordValue,
      autoComplete: "current-password",
      tabIndexProp: 2,
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
      tabIndexProp: 3,
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
