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
  return (
    <div style={{ width: "100%" }}>
      <TextInput {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
