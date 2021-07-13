import React from "react";
import ELink from ".";

export default {
  title: "Components/ExternalLink",
  component: ELink,
  parameters: {
    docs: {
      description: {
        component: "Custom External Link.",
      },
    },
  },
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <ELink {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "External Link",
  fontSize: "20px",
  fontWeight: 300,
  textTransform: "none",
  href: "/",
  title: "title-ELink",
  tabIndex: -1,
  target: "_blank",
  textDecoration: "none",
  hoverTextDecoration: "underline",
  id: "id-ELink",
  className: "class-ELink",
};
