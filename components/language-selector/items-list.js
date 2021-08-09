import React from "react";
import { StyledItem, StyledItemsList } from "./styled-language-selector";
import { Link } from "gatsby";
import languages from "../../languages";
import Text from "../text";

export default function LangsList(props) {
  const { t, isOpen } = props;
  return (
    <StyledItemsList isOpen={isOpen} countLanguages={languages.length}>
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
