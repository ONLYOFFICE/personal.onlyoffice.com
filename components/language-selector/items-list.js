import React, { useEffect } from "react";
import {
  StyledItem,
  StyledMobileView,
  StyledPanelView,
} from "./styled-language-selector";
import { Link } from "gatsby";
import languages from "../../languages";
import Text from "../text";
import IconButton from "../icon-button";
import Portal from "../portal";
export default function LangsList(props) {
  const { t, isOpen, currentLanguage, onCloseSelector } = props;
  const isPanelView = typeof window !== "undefined" && window.innerWidth >= 767;

  useEffect(() => {
    const layout = document.getElementById("page-layout");
    if (!isPanelView && isOpen) {
      layout.style.overflow = "hidden";
    }

    if (!isPanelView && !isOpen) {
      layout.style.overflow = "unset";
    }
  });

  let path = "";
  if (typeof window !== "undefined") {
    const {
      location: { pathname, search },
    } = window;

    path = `${pathname}${search ? search : ""}`;
  }

  const renderItemList = () => {
    return languages.map((language) => {
      const { shortKey, iconName, key } = language;
      const localizedPath = path.replace(currentLanguage, shortKey);

      return (
        <StyledItem key={key}>
          <Link to={`${localizedPath}`}>
            <img src={`/flags/${iconName}`} alt={key} width="18px" />
            <Text as="span" className="title-lng">
              {t(key)}
            </Text>
          </Link>
        </StyledItem>
      );
    });
  };

  const renderMobileView = () => {
    const itemsList = renderItemList();
    return (
      isOpen && (
        <Portal>
          <StyledMobileView
            isOpen={isOpen}
            className="lng-selector mobile-languages-list"
            countLanguages={languages.length}
            onScroll={(e) => e.stopPropagation()}
          >
            <Text className="header-lng" fontSize="16px" fontWeight="bold">
              {t("ChooseLanguage")}
            </Text>
            <IconButton
              iconName="/close-icon/close.react.svg"
              className="close-button-img"
              size="14px"
              onClick={onCloseSelector}
            />
            {itemsList}
          </StyledMobileView>
        </Portal>
      )
    );
  };

  const renderPanelView = () => {
    const itemsList = renderItemList();
    return (
      <StyledPanelView
        isOpen={isOpen}
        countLanguages={languages.length}
        className="lng-selector"
      >
        {itemsList}
      </StyledPanelView>
    );
  };

  const panelView = renderPanelView();
  const mobileView = renderMobileView();

  return isPanelView ? panelView : mobileView;
}
