import styled, { css } from "styled-components";
import { Base } from "../themes";
import { Dark } from "../themes";

const hoverAndActiveStyles = css`
  background-color: ${(props) =>
    props.backgroundColorHover ||
    (props.typeButton === "primary"
      ? props.theme.button.backgroundColorPrimaryHover
      : props.typeButton === "transparent"
      ? "transparent"
      : props.theme.button.backgroundColorSecondaryHover)};
  border-color: ${(props) =>
    props.borderColorHover
      ? props.borderColorHove
      : props.typeButton === "transparent" &&
        props.theme.button.borderColorHover};
  color: ${(props) =>
    props.textColorHover ||
    (props.typeButton === "transparent"
      ? props.theme.button.textColorTransparentTypeHover
      : props.typeButton === "secondary"
      ? props.theme.button.textColorSecondaryType
      : props.theme.button.textColor)};
`;

const StyledButton = styled.button`
  transition: 0.5s;
  overflow: ${(props) => props.theme.button.overflow};
  text-overflow: ${(props) => props.theme.button.textOverflow};
  white-space: ${(props) => props.theme.button.whiteSpace};
  outline: ${(props) => props.theme.button.outline};
  box-sizing: ${(props) => props.theme.button.boxSizing};
  margin: ${(props) => props.theme.button.margin};
  display: ${(props) => props.theme.button.display};
  text-align: ${(props) => props.theme.button.textAlign};
  text-decoration: ${(props) => props.theme.button.textDecoration};

  outline: none;
  outline-color: none;
  -webkit-tap-highlight-color: transparent;

  font-family: "OpenSans", sans-serif;
  height: ${(props) => props.height};
  width: ${(props) => (props.isScale ? "100%" : props.width)};

  min-width: ${(props) => props.minwidth || "min-content"};

  border: ${(props) =>
    props.typeButton === "transparent"
      ? props.theme.button.borderTransparentType
      : "unset"};
  border-radius: ${(props) => props.theme.button.borderRadius};

  font-size: ${(props) => props.fontSize || props.theme.button.fontSize};
  font-weight: ${(props) => props.fontWeight || props.theme.button.fontWeight};
  text-transform: ${(props) => props.theme.button.textTransform};
  line-height: ${(props) => props.lineHeight || props.theme.button.lineHeight};

  color: ${(props) =>
    props.typeButton === "transparent"
      ? props.theme.button.textColorTransparentType
      : props.typeButton === "secondary"
      ? props.theme.button.textColorSecondaryType
      : props.theme.button.textColor};

  padding: ${(props) => (props.padding ? props.padding : "0 20px")};

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  background-color: ${(props) =>
    props.typeButton === "primary"
      ? props.theme.button.backgroundColorPrimary
      : props.typeButton === "transparent"
      ? "transparent"
      : props.theme.button.backgroundColorSecondary};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      ${hoverAndActiveStyles};
    }
  }

  &:active {
    ${hoverAndActiveStyles};
  }

  &:disabled {
    cursor: default;
    opacity: ${(props) => (props.typeButton !== "primary" ? 0.3 : 1)};
    background-color: ${(props) =>
      props.typeButton === "primary"
        ? "#ffd4c5"
        : props.typeButton === "transparent"
        ? "transparent"
        : props.theme.button.backgroundColorSecondary};
    border-color: ${(props) =>
      props.typeButton === "transparent" && props.theme.button.borderColor};
    color: ${(props) =>
      props.typeButton === "transparent"
        ? props.theme.button.textColorTransparentType
        : props.typeButton === "secondary"
        ? props.theme.button.textColorSecondaryType
        : props.theme.button.textColor};
  }

  .btn-with-icon {
    display: inline-block;
    vertical-align: middle;
  }
`;

const themeButton = (props) => (props.themeButton ? Base : Dark);

StyledButton.defaultProps = { theme: themeButton };

export default StyledButton;
