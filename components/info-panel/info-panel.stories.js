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

const Template = ({ children, amountButton, ...args }) => {

  const onClick = () => {
    alert("CLICK");
  }

  const item = [
    {
      iconName: `/icons/app-store.react.svg`,
      typeButton: "iconButton",
      size: "170px",
      href:"#",
    }, 
    {
      iconName: `/icons/app-store.react.svg`,
      width: "170px",
      typeButton: "transparent",
      label: "Default Button",
      themeButton: false,
      textColorHover: "#ffffff",
      borderColorHover: "#ffffff",
      
      onClick: onClick
    }
  ];  

  return (
    <div style={{ width: "100%" }}>
      <InfoPanel amountButton={item} {...args}>
         {children}
      </InfoPanel>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  imgLeft: true,
  amountButton: [{}],
  children: "Работайте с документами на мобильных в приложениях ONLYOFFICE",
  bgColor: "linear-gradient(100.79deg, #666666 23.25%, #444444 78.7%)", 
  imgUrl: "/images/mobile_editor.png",
  defaultImgUrl: "/images/online_en.png",
  textColor: "#fff"
};
