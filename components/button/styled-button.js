import { styled } from "linaria/react";
import { Base } from "../themes";
import { Dark } from "../themes";

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

  height: ${(props) => props.height};
  width: ${(props) => (props.isScale ? "100%" : props.width)};
  min-width: ${(props) => props.minwidth};

  border: ${(props) =>
    props.typeButton === "transparent" &&
    props.theme.button.borderTransparentType};
  border-radius: ${(props) => props.theme.button.borderRadius};

  font-size: ${(props) => props.theme.button.fontSize};
  font-weight: ${(props) => props.theme.button.fontWeight};
  text-transform: ${(props) => props.theme.button.textTransform};
  line-height: ${(props) => props.theme.button.lineHeight};

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
      props.backgroundColorHover ||
      (props.typeButton === "primary"
        ? props.theme.button.backgroundColorPrimaryHover
        : props.typeButton === "transparent"
        ? "transparent"
        : props.theme.button.backgroundColorSecondaryHover)};
    border-color: ${(props) =>
      props.borderColorHover ||
      props.typeButton === "transparent" &&
      props.theme.button.borderColorHover};
    color: ${(props) =>
      props.textColorHover ||
      (props.typeButton === "transparent"
        ? props.theme.button.textColorTransparentTypeHover
        : props.typeButton === "secondary"
        ? props.theme.button.textColorSecondaryType
        : props.theme.button.textColor)};
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
    background-color: ${(props) =>
      props.typeButton === "primary"
        ? props.theme.button.backgroundColorPrimary
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

const themeButton = props => props.themeButton ? Base : Dark;

StyledButton.defaultProps = { theme:  themeButton};

export default StyledButton;
