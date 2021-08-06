import styled from "styled-components";
import { Base } from "../themes";

const StyledButton = styled.button`
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

  font-family: "OpenSans", sans-serif;
  letter-spacing: normal;

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

  padding: 0 20px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  background-color: ${(props) =>
    props.typeButton === "primary"
      ? props.theme.button.backgroundColorPrimary
      : props.typeButton === "transparent"
      ? "transparent"
      : props.theme.button.backgroundColorSecondary};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.typeButton === "primary"
        ? props.theme.button.backgroundColorPrimaryHover
        : props.typeButton === "transparent"
        ? "transparent"
        : props.theme.button.backgroundColorSecondaryHover};
    border-color: ${(props) =>
      props.typeButton === "transparent" &&
      props.theme.button.borderColorHover};
    color: ${(props) =>
      props.typeButton === "transparent"
        ? props.theme.button.textColorTransparentTypeHover
        : props.typeButton === "secondary"
        ? props.theme.button.textColorSecondaryType
        : props.theme.button.textColor};
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

StyledButton.defaultProps = { theme: Base };

export default StyledButton;
