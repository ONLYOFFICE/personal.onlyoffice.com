import React, { useEffect, useState } from "react";
import StyledLanguageSelector from "./styled-language-selector";

import ArrowDown from "../../static/icons/arrow-drop-down.react.svg";
import ArrowUp from "../../static/icons/arrow-drop-up.react.svg";
import ItemsList from "./items-list";

const LanguageSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    typeof window !== "undefined" &&
      isOpen &&
      window.addEventListener("click", handleClickOutside);

    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const handleClickOutside = (e) => {
    if (
      isOpen &&
      (!e.target.closest(".lng-selector") ||
        e.target.closest(".close-button-img"))
    ) {
      onCloseSelector();
    }
  };

  const onClickHandler = (e) => {
    e.stopPropagation();
    if (e.target.closest(".flag-image") || e.target.closest(".arrow-image")) {
      setIsOpen(!isOpen);
      props.onClick && props.onClick(e);
    }
  };

  const onCloseSelector = () => {
    setIsOpen(false);
  };

  const { currentLanguage, t } = props;

  return (
    <StyledLanguageSelector
      {...props}
      onClick={onClickHandler}
      className="language-selector"
    >
      <img
        className="flag-image"
        alt="flag"
        src={`/flags/${currentLanguage}.svg`}
        width={"18px"}
      />
      <div className="arrow-image">
        {isOpen ? <ArrowDown alt="arrow-down" /> : <ArrowUp alt="arrow-up" />}
      </div>
      <ItemsList
        className={`languages-list lng-selector ${
          isOpen ? "language-selector-open" : "language-selector-closed"
        }`}
        t={t}
        isOpen={isOpen}
        currentLanguage={currentLanguage}
        onCloseSelector={onCloseSelector}
      />
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
