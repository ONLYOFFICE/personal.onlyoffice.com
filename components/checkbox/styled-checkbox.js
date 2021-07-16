import { styled } from "linaria/react";
import Base from "../themes/base";

const StyledLabel = styled.label `
  display: flex;
  align-items: center;
  position: relative;
  margin: 0;

  user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  cursor: ${(props) => props.isDisabled ? "not-allowed" : "pointer"}
  
  .checkbox-text {
    color: ${(props) =>
      props.isDisabled
        ? props.theme.checkbox.disableColor
        : props.theme.checkbox.color};
  }
`;

StyledLabel.defaultProps = { theme: Base };

const HiddenInput = styled.input`
  opacity: 0.0001;
  position: absolute;
  right: 0;
  z-index: -1;
`;

export { StyledLabel, HiddenInput };