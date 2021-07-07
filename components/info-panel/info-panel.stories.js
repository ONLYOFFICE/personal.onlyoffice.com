import React from "react";
import InfoPanel from "./";

export default {
  title: "Components/InfoPanel",
  component: InfoPanel,
  parameters: {
    docs: {
      description: {
        component: "Custom InfoPanel Component.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <InfoPanel {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
