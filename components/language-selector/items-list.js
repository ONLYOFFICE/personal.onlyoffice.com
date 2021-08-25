import React from "react";
import { StyledItem, StyledItemsList } from "./styled-language-selector";
import { Link } from "gatsby";
import languages from "../../languages";
import Text from "../text";
import IconButton from "../icon-button";

export default function LangsList(props) {
  const { t, isOpen, onCloseSelector } = props;
  return (
    
    <StyledItemsList isOpen={isOpen} countLanguages={languages.length}>
      <Text className="header-lng">
        Choose your language
      </Text>
      <IconButton
        iconName="/close-icon/close.react.svg"
        className="close-button-img"
        size="14px"
        onClick={onCloseSelector}
      />
      
      {languages.map((language) => {
        const { shortKey, iconName, key } = language;
        const languageName = t ? t(key) : key;

        return (
          
          <StyledItem key={key}>            
            <Link to={shortKey !== "en" ? `/${shortKey}` : "/"}>
              <img src={`/flags/${iconName}`} alt={key} width="18px" />
              <Text as="span" className="title-lng">
                {languageName}
              </Text>
            </Link>
          </StyledItem>
        );
      })}
    </StyledItemsList>
  );
}
