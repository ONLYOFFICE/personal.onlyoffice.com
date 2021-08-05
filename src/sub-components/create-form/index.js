import React, { useState } from "react";

import Form from "../../../components/form";
import AdditionalSection from "../../sub-components/additional-section";
import SocialButtons from "../../sub-components/social-buttons";
import LicenceLink from "../../sub-components/license";

import { join } from "../../api";

const CreateForm = ({ t, isPanel, buttonHref }) => {
  const [emailValue, setEmailValue] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [isSubscribe, setIsChecked] = useState(true);
  const [isAcceptLicence, setIsLicense] = useState(false);

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
    join(emailValue).catch((err) => alert(err));
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
      isDisabled: !isAcceptLicence,
    },
    { type: "separator", separatorText: t("AuthDocsOr") },
    {
      type: "other",
      element: <SocialButtons key="social-buttons" />,
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
    <Form
      className="login-form"
      submitForm={onSubmitHandler}
      formData={formData}
      isPanel={isPanel}
    />
  );
};

export default CreateForm;
