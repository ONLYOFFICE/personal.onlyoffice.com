import { styled } from "linaria/react";
import Base from "../themes/base";

const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: min-content 100%;
  align-items: start;
  gap: 8px;
  position: relative;
  margin: 0;

  user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  color: ${(props) => props.theme.checkbox.color};
  font-size: ${(props) => props.theme.checkbox.fontSize};
  line-height: ${(props) => props.theme.checkbox.lineHeight};

  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  .checkbox-text {
    margin-top: 2px;
  }

  .checkbox-text * {
    padding-right: 4px;
    vertical-align: bottom;
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
