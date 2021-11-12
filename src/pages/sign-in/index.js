import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../../components/layout";
import Form from "../../../components/form";
import toastr from "../../../components/toast/toastr";

import AdditionalSection from "../../sub-components/additional-section";
import FooterContent from "../../sub-components/footer-content";
import FormLink from "../../sub-components/form-link";
import Head from "../../sub-components/head";
import HeaderContent from "../../sub-components/header-content";
import StyledSection from "../../sub-components/section";
import SocialButtons from "../../sub-components/social-buttons";

import { getSettings, login } from "../../api";

import { createPasswordHash } from "../../helpers/";

import withDetectLanguage from "../../helpers/withDetectLanguage";

const SignInPage = ({ location }) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  const [hashSettings, setHashSettings] = useState();

  const [emailIsEmpty, setEmailIsEmpty] = useState(null);
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(null);

  useEffect(() => {
    getSettings()
      .then((res) => {
        setHashSettings(res.passwordHash);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (location.state) {
      location.state.hasOwnProperty("toastr") &&
        toastr.success(location.state.toastr.text);
    }
  }, [location.state]);

  const {
    t,
    i18n: { language },
  } = useTranslation();

  const buttonHref =
    language === "en" ? "/create-now" : `/${language}/create-now`;

  const onEmailChangeHandler = (e, isValid) => {
    setEmailValue(e.target.value);
    setEmailIsValid(isValid);
    setEmailIsEmpty(false);
  };

  const onPasswordChangeHandler = (e, isValid) => {
    setPasswordValue(e.target.value);
    setPasswordIsValid(isValid);
    setPasswordIsEmpty(false);
  };

  const changeCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const onSubmitHandler = (e) => {
    //e.preventDefault();

    let hasError;

    if (!passwordValue.trim()) {
      hasError = true;
      setPasswordIsValid(false);
      setPasswordIsEmpty(true);
    }

    if (!emailValue.trim()) {
      hasError = true;
      setEmailIsValid(false);
      setEmailIsEmpty(true);
    }

    if (hasError) return;

    const hash = createPasswordHash(passwordValue, hashSettings);

    if (emailIsValid && passwordIsValid) {
      login(emailValue, hash)
        .then(() => {
          const redirectPath = localStorage.getItem("redirectPath");
          if (redirectPath) localStorage.removeItem("redirectPath");
          window.location.href = redirectPath || "/";
        })
        .catch((e) => toastr.error(t("InvalidUserNameOrPwd")));
    } else {
      toastr.error(t("InvalidUserNameOrPwd"));
    }
  };

  const formSeparator = {
    type: "separator",
    separatorText: t("AuthDocsEnterViaSocial"),
  };

  const socialButtonsSection = {
    type: "other",
    element: <SocialButtons key="social-buttons" t={t} />,
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
      isError: !emailIsValid,
      errorText: emailIsEmpty ? t("AuthErrorIndicationText") : "",
    },
    {
      type: "input",
      inputType: "password",
      placeholder: t("Password"),
      callback: onPasswordChangeHandler,
      value: passwordValue,
      autoComplete: "current-password",
      tabIndexProp: 2,
      isError: !passwordIsValid,
      errorText: passwordIsEmpty ? t("AuthErrorIndicationText") : "",
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
    { ...formSeparator },
    {
      ...socialButtonsSection,
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
        <FooterContent t={t} language={language} />
      </Layout.PageFooter>
    </Layout>
  );
};

export default withDetectLanguage(SignInPage);

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
