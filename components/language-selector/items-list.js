import React from "react";
import { StyledItem, StyledItemsList } from "./styled-language-selector";
import { Link } from "gatsby";
import languages from "../../languages";
import Text from "../text";

export default function LangsList(props) {
  const { t, isOpen, currentLanguage } = props;

  let path = "";
  if (typeof window !== "undefined") {
    const {
      location: { pathname },
    } = window;
    path = pathname.includes(currentLanguage) ? pathname : `/en${pathname}`;
  }

  return (
    <StyledItemsList isOpen={isOpen} countLanguages={languages.length}>
      {languages.map((language) => {
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
      })}
    </StyledItemsList>
  );
}
