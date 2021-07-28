import React from "react";
import InfoPanel from "../../../components/info-panel";
import StyledInfo from "./styled-info";
const Info = (props) => {
    const { t, language, footerHomePage, ...rest } = props;
    return(
        <StyledInfo>
        <InfoPanel
            imgleft={false}
            textColor={"#333"}
            imgUrl={`/images/online_${language}.png`}                     
            defaultImgUrl={`/images/online_en.png`}
            bgColor={"white"}
            amountButton={[
                {
                    iconName: `/images/chrome_web_store_${language}.svg`,
                    defaultIcon: `/images/chrome_web_store_en.svg`, 
                    typeButton: "iconButton",
                    size: "188px",
                    href:"#",
                }
            ]}
        >
        <b>Получите быстрый доступ к ONLYOFFICE Personal.</b> Скачайте бесплатное расширение для Chrome.
        </InfoPanel>
        
        <InfoPanel
            imgleft={true}
            textColor={"#fff"}
            imgUrl={`/images/desktop_editor.png`}                     
            defaultImgUrl={`/images/online_en.png`}
            bgColor={"linear-gradient(98.93deg, #FF8E3D 16.64%, #FF6F3D 99.83%)"}
            amountButton={[
                {
                    typeButton: "transparent",
                    textButton: "Button",
                    typeButton: "defaultButton",
                    height: "56px",
                    minwidth: "130px",                    
                    href:"$",
                }
            ]}
        >
        Работайтеs <b>приложениях ONLYOFFICE</b> и редактируйте файлы офлайн или подключитесь к облаку.
        </InfoPanel>

        <InfoPanel
            imgleft={false}
            textColor={"#fff"}
            imgUrl={`/images/mobile_editor.png`}                     
            defaultImgUrl={`/images/online_en.png`}
            bgColor={"linear-gradient(100.79deg, #666666 23.25%, #444444 78.7%)"}
            amountButton={[
                {
                    iconName: `/icons/app-store.react.svg`,
                    typeButton: "iconButton",
                    size: "170px",
                    href:"#",
                }, 
                {
                    iconName: `/icons/app-store.react.svg`,
                    typeButton: "iconButton",
                    size: "170px",
                    href:"#",
                }
            ]}
        >
         Работайте с документами на мобильных в <b>приложениях ONLYOFFICE</b>
        </InfoPanel>
        </StyledInfo>
    );
}

export default Info;