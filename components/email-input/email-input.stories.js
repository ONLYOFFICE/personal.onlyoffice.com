import React, { useState } from "react";
import EmailInput from "./";
import TextInput from "../text-input";

export default {
  title: "Components/EmailInput",
  component: EmailInput,
  subcomponents: { TextInput },
  parameters: {
    docs: {
      description: {
        component:
          "Email entry field with advanced capabilities for validation based on settings.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e, isValid) => {
    setValue(e.target.value);
    console.log(e.target.value, `isValid: ${isValid}`);
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px" }}>
      <EmailInput {...args} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Your email*",
};
