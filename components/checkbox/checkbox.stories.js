import React from "react";
import Checkbox from "./";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Custom checkbox input.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Checkbox {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
