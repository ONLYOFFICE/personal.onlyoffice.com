import React from "react";
import Heading from "./";

export default {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: "Heading text structured in levels.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <Heading {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
