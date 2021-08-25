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
  });

  const handleClickOutside = (e) => {
    if (!e.target.closest("lng-selector")) {
      onCloseSelector();
      console.log(e.target.closest(".lng-selector"));
    }
  };

  const onClickHandler = (e) => {
    setIsOpen(!isOpen);
    props.onClick && props.onClick(e);
  };
  
  const onCloseSelector = () => {
    setIsOpen(false);
  }

  const { currentLanguage, t } = props;

  return (
    <StyledLanguageSelector {...props} onClick={onClickHandler}>
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
        className="languages-list"
        t={t}
        isOpen={isOpen}
        currentLanguage={currentLanguage}
        onCloseSelector={onCloseSelector}
      />
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
