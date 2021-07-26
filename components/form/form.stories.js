import React, { useState } from "react";
import Form from "./";
import ExternalLink from "../external-link";
import Text from "../text";
import SocialButton from "../social-button";

export default {
  title: "Components/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component: "Customize Form Component",
      },
    },
  },
};

const ComboLabel = () => {
  return (
    <>
      <Text as="span">Combo label - </Text>
      <ExternalLink
        label="External Link"
        href="https://github.com/ONLYOFFICE/personal.onlyoffice.com"
        target="_blank"
      />
      <Text as="span">
        and some very very very very very very very very very very very very
        very very very very very very long text
      </Text>
    </>
  );
};

const ELink = () => {
  return (
    <ExternalLink
      label="External Link"
      href="https://github.com/ONLYOFFICE/personal.onlyoffice.com"
      target="_blank"
      style={{ margin: "0 auto" }}
    />
  );
};

const Template = ({ ...args }) => {
  const [isValid, setIsValid] = useState();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(true);

  const clickSocialButton = (e) => {
    console.log(e);
  };

  const SocialButtons = () => {
    return (
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "min-content",
          margin: "auto",
        }}
      >
        <SocialButton
          iconName="social-icons/google.react.svg"
          onClick={clickSocialButton}
        />
        <SocialButton
          iconName="social-icons/facebook.react.svg"
          onClick={clickSocialButton}
        />
        <SocialButton
          iconName="social-icons/linkedin.react.svg"
          onClick={clickSocialButton}
        />
      </div>
    );
  };

  const onSubmitFormHandler = (e) => {
    console.log(e);
    alert(
      `onSubmit called! isValid: ${isValid}, email: ${email}, pwd: ${pwd}, checkbox one: ${isCheckedOne}, checkbox two: ${isCheckedTwo}`
    );
  };

  const emailChangeHandler = (e, isValid) => {
    console.log("EmailInput callback", e.target.value, isValid);
    setIsValid(isValid);
    setEmail(e.target.value);
  };

  const onButtonEmailClick = () => {
    alert("Button Email Click!");
  };

  const pwdChangePassword = (e, pwdValid) => {
    console.log(
      "PaswwordInput callback",
      e.target.value,
      "Password valid: ",
      pwdValid
    );
    setPwd(e.target.value);
  };

  const checkboxOneChange = (e) => {
    console.log("Checkbox one callback", e.target.checked);
    setIsCheckedOne(e.target.checked);
  };

  const checkboxTwoChange = (e) => {
    console.log("Checkbox two callback", e.target.checked);
    setIsCheckedTwo(e.target.checked);
  };

  const buttonClick = (e) => {
    console.log("Button click", e.target);
  };

  const buttonSubmitClick = (e) => {
    console.log("on submit button click", e.target);
  };

  const formData = [
    {
      type: "heading",
      headingText: "Heading",
      isHeader: true,
    },
    {
      type: "input",
      inputType: "password",
      placeholder: "Some password",
      callback: pwdChangePassword,
      value: pwd,
    },
    {
      type: "input",
      inputType: "email",
      placeholder: "Some email",
      callback: emailChangeHandler,
      value: email,
      withButton: true,
      typeButton: "primary",
      isSubmit: true,
      labelButton: "Label Button",
      buttonClick: onButtonEmailClick,
    },
    {
      type: "checkbox",
      callback: checkboxOneChange,
      isChecked: isCheckedOne,
      label: "Simple Label",
    },
    {
      type: "checkbox",
      callback: checkboxTwoChange,
      isChecked: isCheckedTwo,
      label: <ComboLabel />,
    },
    {
      type: "button",
      callback: buttonClick,
      typeButton: "secondary",
      isSubmit: false,
      toHideButton: false,
      label: "Some Button",
    },
    {
      type: "button",
      callback: buttonSubmitClick,
      isSubmit: true,
      toHideButton: true,
      label: "Is Submit Button",
    },
    { type: "other", element: <ELink key="external-link" /> },
    {
      type: "separator",
      separatorText: "Separator Text",
    },
    {
      type: "other",
      element: <SocialButtons key="social-buttons" />,
    },
  ];

  return (
    <Form {...args} formData={formData} submitForm={onSubmitFormHandler} />
  );
};

export const Default = Template.bind({});
Default.args = {
  isPanel: true,
};
