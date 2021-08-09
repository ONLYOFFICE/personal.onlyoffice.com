import React from "react";
import PropTypes, { object } from "prop-types";

import Button from "../../button";
import IconButton from "../../icon-button";
import CustomLink from "../../link";

import StyledGroupButton from "./styled-buttons-group";

const ButtonPanel = ({ amountButton, ...rest }) => {
  return (
    <StyledGroupButton>
      {amountButton.map((item, i) => (
        <CustomLink key={i} href={item.href} {...rest}>
          {item.typeButton === "iconButton" ? (
            <IconButton
              iconName={item.iconName}
              defaultIcon={item.defaultIcon}
              size={item.size}
              onClick={item.onClick}
              isDisabled={item.isDisabled}
              hoverColor={item.hoverColor}
              style={item.style}
            />
          ) : (
            <Button
              icon={item.iconName}
              typeButton={item.typeButton}
              label={item.label}
              onClick={item.onClick}
              isDisabled={item.isDisabled}
              width={item.width}
              height={item.height}
              minwidth={item.minwidth}
              themeButton={item.themeButton}
              backgroundColorHover={item.backgroundColorHover}
              borderColorHover={item.borderColorHover}
              textColorHover={item.textColorHover}
              style={item.style}
            />
          )}
        </CustomLink>
      ))}
    </StyledGroupButton>
  );
};

ButtonPanel.propTypes = {
  amountButton: PropTypes.arrayOf(object),
};

export default ButtonPanel;
