import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";

import Form from "../../../components/form";
import AdditionalSection from "../../sub-components/additional-section";
import SocialButtons from "../../sub-components/social-buttons";
import LicenceLink from "./licence-checkbox-content";

import { join } from "../../api";

import useErrorValidationIndication from "./sub-components/validation";

const CreateForm = ({ t, isPanel, buttonHref, isErrorIndicationText }) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [isSubscribe, setIsChecked] = useState(true);
  const [isAcceptLicence, setIsLicense] = useState(false);

  const validations = { isEmpty: "", incorrectValue: "" };
  const validationsErrorText = {errorEmptyValue: t("AuthErrorIndicationText"), errorIncorrectValue: t("AuthErrorIndicationIncorrectEmail")}
  let valid = useErrorValidationIndication(emailValue, emailIsValid, validations, validationsErrorText, isAcceptLicence);

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isAcceptLicence && emailIsValid)
      join(emailValue)
        .then(() => {
          navigate("/success", { state: { email: emailValue } });
        })
        .catch((err) => alert(err));
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
      tabIndexProp: 1,
      isErrorIndicationText: isErrorIndicationText ? valid.isErrorLabel : false,
      errorIndicationText: valid.isErrorValueText,
      offValidation: false,
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
      tabIndexProp: 2,
    },
    { type: "separator", separatorText: t("AuthDocsOr") },
    {
      type: "other",
      element: <SocialButtons key="social-buttons" />,
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