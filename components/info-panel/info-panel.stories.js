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

console.log(InfoPanel);

const onClick = () => {
  alert("CLICK");
};

const items = [
  {
    iconName: `icons/app-store.react.svg`,
    typeButton: "transparent",
    width: "180px",
    themeButton: false,
    textColorHover: "#ffffff",
    borderColorHover: "#ffffff",
    backgroundColorHover: "#666",
    href: "#",
  },
  {
    width: "170px",
    typeButton: "transparent",
    label: "Default Button",
    themeButton: false,
    textColorHover: "#ffffff",
    borderColorHover: "#ffffff",
    backgroundColorHover: "#666",
    onClick: onClick,
  },
];

const Template = ({ children, amountButton, ...args }) => {
  return (
    <div style={{ width: "100%" }}>
      <InfoPanel amountButton={amountButton} {...args}>
        {children}
      </InfoPanel>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  imgLeft: true,
  amountButton: items,
  children: "Работайте с документами на мобильных в приложениях ONLYOFFICE",
  bgColor: "linear-gradient(100.79deg, #666666 23.25%, #444444 78.7%)",
  imgUrl: "/images/mobile_editor.png",
  defaultImgUrl: "/images/online_en.png",
  textColor: "#fff",
};
