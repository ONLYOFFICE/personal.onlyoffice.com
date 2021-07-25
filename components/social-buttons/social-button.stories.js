import React from "react";
import SocialButton from ".";

export default {
  title: "Components/SocialButton",
  component: SocialButton,
  parameters: {
    docs: {
      description: {
        component: "SocialButton component",
      },
    },
  },
};

const Template = ({ ...args }) => {
  const onClickHandler = (e) => {
    console.log("onClick", e);
  };
  return (
    <div style={{ width: "100%" }}>
      <SocialButton {...args} onClick={onClickHandler} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  iconName: "social-icons/facebook.react.svg",
};
