import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";

import Form from "../../../components/form";
import AdditionalSection from "../../sub-components/additional-section";
import SocialButtons from "../../sub-components/social-buttons";
import LicenceLink from "./licence-checkbox-content";

import { registration } from "../../api";
import { sendAnalytics } from "../../helpers";
import toastr from "../../../components/toast/toastr";

const CreateForm = ({ t, isPanel, buttonHref, currentLanguage }) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [isSubscribe, setIsSubscribe] = useState(true);
  const [isAcceptLicence, setIsLicense] = useState(false);
  const [emailIsEmpty, setEmailIsEmpty] = useState(true);
  const [emailIsIncorrect, setEmailIsIncorrect] = useState(true);
  const [errorTextInput, setErrorTextInput] = useState(null);
  const [emailIsExist, setEmailIsExist] = useState(false);

  const [isDesktopClient, setIsDesktopClient] = useState(null);

  useEffect(() => {
    const isDesktopClient = window["AscDesktopEditor"] !== undefined;
    setIsDesktopClient(isDesktopClient);
  }, []);

  const onEmailChangeHandler = (e, isValid) => {
    setEmailValue(e.target.value);
    setEmailIsValid(isValid);
    setEmailIsExist(false);
  };

  const changeSubscribe = (e) => {
    setIsSubscribe(e.target.checked);
  };

  const changeAcceptLicense = (e) => {
    setIsLicense(e.target.checked);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!emailValue.trim()) {
      hasError = true;
      setEmailIsValid(false);
      setEmailIsEmpty(true);
      setErrorTextInput(t("AuthErrorIndicationText"));
    } else {
      setEmailIsEmpty(false);
    }

    if (emailValue.trim() && !emailIsValid) {
      hasError = true;
      setEmailIsValid(false);
      setEmailIsIncorrect(true);
      setErrorTextInput(t("AuthErrorIndicationIncorrectEmail"));
    } else {
      setEmailIsIncorrect(false);
    }

    if (!isAcceptLicence) {
      hasError = true;
    }

    if (hasError) return false;

    if (emailIsValid)
      registration(emailValue, isSubscribe, currentLanguage)
        .then((res) => {
          if (res) {
            setEmailIsExist(true);
            setErrorTextInput(res);
          } else {
            sendAnalytics("Personal_Portal_Register");
            navigate("/success", {
              state: {
                email: emailValue,
              },
            });
          }
        })
        .catch((err) => toastr.error(`${err}`));
  };

  const additionalSection = isPanel
    ? null
    : {
        type: "other",
        element: (
          <AdditionalSection
            key="additional"
            textLabel={t("AuthDocsAlready")}
            buttonHref={buttonHref}
            buttonLabel={t("AuthDocsSignIn")}
          />
        ),
      };

  const formSeparator = isDesktopClient
    ? null
    : {
        type: "separator",
        separatorText: t("AuthDocsOr"),
      };

  const socialButtonsSection = isDesktopClient
    ? null
    : {
        type: "other",
        element: (
          <SocialButtons
            key="social-buttons"
            t={t}
            isDisabled={!isAcceptLicence}
          />
        ),
      };

  const formData = [
    { type: "heading", headingText: t("CreateFormHeader"), isHeader: true },

    {
      type: "input",
      inputType: "email",
      placeholder: t("AuthDocsYourEmail"),
      callback: onEmailChangeHandler,
      value: emailValue,
      withButton: isPanel,
      typeButton: "primary",
      isSubmit: true,
      labelButton: t("RegistryButtonCreateNow"),
      buttonClick: onSubmitHandler,
      isDisabledButton: !isAcceptLicence,
      disabledValidation: false,
      isError:
        (emailIsEmpty && !emailIsValid) ||
        (emailIsIncorrect && !emailIsValid) ||
        emailIsExist,
      errorText: errorTextInput,
      tabIndexProp: 0,
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
      typeButton: "primary",
      label: t("RegistryButtonCreateNow"),
      isDisabled: !isAcceptLicence,
      toHideButton: isPanel,
      tabIndexProp: 0,
    },
    { ...formSeparator },
    {
      ...socialButtonsSection,
    },
    {
      ...additionalSection,
    },
  ];

  return (
    <Form
      className="login-form"
      submitForm={onSubmitHandler}
      formData={formData}
      isPanel={isPanel}
    />
  );
};

export default CreateForm;
