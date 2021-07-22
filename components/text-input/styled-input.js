import { styled } from "@linaria/react";
import { Base } from "../themes";

const StyledInput = styled.div`
  display: block;
  position: relative;
  width: ${(props) => props.width || props.theme.textInput.width};
  padding: 0;
  margin: 0;
  input:focus + label {
    top: ${(props) => props.theme.textInput.label.top};
    font-size: ${(props) => props.theme.textInput.label.fontSize};
    left: ${(props) => props.theme.textInput.label.left};
    color: ${(props) =>
      (props.defaultInput && props.theme.textInput.backgroundColor) ||
      (props.isSuccess && props.theme.textInput.borderColorSuccess) ||
      (props.isError && props.theme.textInput.borderColorError) ||
      props.theme.textInput.label.colorHover};
  }
`;

StyledInput.defaultProps = { theme: Base };

export default StyledInput;
