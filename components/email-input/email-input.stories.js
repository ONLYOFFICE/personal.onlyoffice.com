import React from "react";
import EmailInput from "./";

export default {
  title: "Components/EmailInput",
  component: EmailInput,
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
  const [value, setValue] = React.useState("");

  const onChangeHandler = (e, isValid) => {
    setValue(e.target.value);
    console.log(e.target.value, `isValid: ${isValid}`);
  };

  return (
    <div style={{ width: "100%" }}>
      <EmailInput {...args} value={value} onChange={onChangeHandler} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
