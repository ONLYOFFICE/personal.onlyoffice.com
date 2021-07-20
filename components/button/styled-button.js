import { styled } from "linaria/react";
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

  height: ${(props) => props.height};
  width: ${(props) => (props.scale ? "100%" : props.width)};
  min-width: ${(props) => props.minwidth};

  border: ${(props) =>
    props.type === "transparent" && props.theme.button.borderTransparentType};
  border-radius: ${(props) => props.theme.button.borderRadius};

  font-size: ${(props) => props.theme.button.fontSize};
  font-weight: ${(props) => props.theme.button.fontWeight};
  text-transform: ${(props) => props.theme.button.textTransform};
  line-height: ${(props) => props.theme.button.lineHeight};

  color: ${(props) =>
    props.type === "transparent"
      ? props.theme.button.textColorTransparentType
      : props.type === "secondary"
      ? props.theme.button.textColorSecondaryType
      : props.theme.button.textColor};

  padding: 0 20px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  background-color: ${(props) =>
    props.type === "primary"
      ? props.theme.button.backgroundColorPrimary
      : props.type === "transparent"
      ? "transparent"
      : props.theme.button.backgroundColorSecondary};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.type === "primary"
        ? props.theme.button.backgroundColorPrimaryHover
        : props.type === "transparent"
        ? "transparent"
        : props.theme.button.backgroundColorSecondaryHover};
    border-color: ${(props) =>
      props.type === "transparent" && props.theme.button.borderColorHover};
    color: ${(props) =>
      props.type === "transparent"
        ? props.theme.button.textColorTransparentTypeHover
        : props.type === "secondary"
        ? props.theme.button.textColorSecondaryType
        : props.theme.button.textColor};
  }

  &:disabled {
    cursor: default;
    opacity: 0.3;
    background-color: ${(props) =>
      props.type === "primary"
        ? props.theme.button.backgroundColorPrimary
        : props.type === "transparent"
        ? "transparent"
        : props.theme.button.backgroundColorSecondary};
    border-color: ${(props) =>
      props.type === "transparent" && props.theme.button.borderColor};
    color: ${(props) =>
      props.type === "transparent"
        ? props.theme.button.textColorTransparentType
        : props.type === "secondary"
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
