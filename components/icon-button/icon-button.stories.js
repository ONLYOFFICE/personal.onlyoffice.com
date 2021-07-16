import React from "react";
import IconButton from "./";

export default {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: "IconButton is used for an action on a page.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <IconButton {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 24,
  iconName: "/static/images/social_icons/facebook.react.svg",
  isDisabled: false,
};
