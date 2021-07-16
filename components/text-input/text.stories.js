import React from "react";
import TextInput from ".";

export default {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: "Custom TextInput component",
      },
    },
  },
};

const Template = ({ ...args }) => {
  const [value, isValue] = React.useState('');
  return (
    <div style={{ width: "100%" }}>
      <TextInput {...args} value={value} onChange={(event) => isValue(event.target.value)}/>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "",
  type: "text",
  labelButton: "default",
  isDisabled: false,
  isAutoFocussed: false,
  isSuccess: false,
  isError: false, 
  checkButton: false,
  squareButton: false,
  tabIndex: -1
};
