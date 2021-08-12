import React from "react";
import InfoPanel from "./";
import Text from "../text";

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

const onClick = () => {
  alert("CLICK");
};

const items = [
  {
    type: "heading",
    element: (
      <Text fontSize="22px" textAlign="center" lineHeight="160%">
        Работайте с документами на мобильных в
        <Text as="span" fontSize="22px" lineHeight="160%" fontWeight="bold">
          приложениях ONLYOFFICE
        </Text>
      </Text>
    ),
  },
  {
    type: "button",
    elements: [
      {
        iconName: `icons/app-store.react.svg`,
        typeButton: "transparent",
        width: "max-content",
        themeButton: false,
        textColorHover: "#ffffff",
        borderColorHover: "#ffffff",
        backgroundColorHover: "#666",
        href: "#",
      },
      {
        width: "max-content",
        typeButton: "transparent",
        label: "Default Button",
        themeButton: false,
        textColorHover: "#ffffff",
        borderColorHover: "#ffffff",
        backgroundColorHover: "#666",
        onClick: onClick,
      },
    ],
  },
  {
    type: "image",
    imgUrl: "/images/mobile_editor.png",
    defaultImgUrl: "/images/online_en.png",
  },
];

const Template = ({ heading, panelData, ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <InfoPanel
        panelData={panelData}
        {...args}
        heading={heading}
        grayBackground
      />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  imgLeft: true,
  panelData: items,
  bgColor: "linear-gradient(100.79deg, #666666 23.25%, #444444 78.7%)",
  imgUrl: "/images/mobile_editor.png",
  defaultImgUrl: "/images/online_en.png",
  textColor: "#fff",
};
