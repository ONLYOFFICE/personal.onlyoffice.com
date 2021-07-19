import React from "react";
import ReviewPanel from "./";

export default {
  title: "Components/ReviewPanel",
  component: ReviewPanel,
  parameters: {
    docs: {
      description: {
        component: "Display ReviewPanel.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <ReviewPanel {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {};
