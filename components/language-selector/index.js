import React, { useEffect, useState } from "react";
import StyledLanguageSelector from "./styled-language-selector";

import ArrowDown from "../../static/site-assets/icons/arrow-drop-down.react.svg";
import ArrowUp from "../../static/site-assets/icons/arrow-drop-up.react.svg";
import ItemsList from "./items-list";
import languages from "../../languages";

const LanguageSelector = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  /* eslint-disable */
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
      window.addEventListener("resize", resizeHandler);
      window.addEventListener("keydown", onKeyDownHandler);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("keydown", onKeyDownHandler);
    };
  }, [isOpen]);
  /* eslint-enable */
  const handleClickOutside = (e) => {
    if (
      isOpen &&
      (!e.target.closest(".lng-selector") ||
        e.target.closest(".close-button-img"))
    ) {
      onCloseSelector();
    }
  };

  const onKeyDownHandler = (e) => {
    e.keyCode === 27 && onCloseSelector();
  };

  const resizeHandler = (e) => {
    if (window.innerWidth < 769) {
      setIsOpen(false);
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

  const language = languages.find((lang) => lang.shortKey === currentLanguage);

  return (
    <StyledLanguageSelector
      {...props}
      onClick={onClickHandler}
      className="language-selector"
    >
      <img
        className="flag-image"
        alt={language.key}
        src={`/site-assets/flags/${currentLanguage}.svg`}
        width={"18px"}
      />
      <div className="arrow-image">
        {isOpen ? <ArrowUp alt="arrow-up" /> : <ArrowDown alt="arrow-down" />}
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
