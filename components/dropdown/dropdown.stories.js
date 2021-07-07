import React from "react";
import Dropdown from "./";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: "Is a dropdown with any number of action.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Dropdown {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
