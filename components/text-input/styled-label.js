import { styled } from "@linaria/react";
import { Base } from "../themes";

const Label = styled.label`
  font-size: ${(props) =>
    !props.isEmpty
      ? props.theme.textInput.label.fontSize
      : props.theme.textInput.fontSize};

  color: ${(props) => props.theme.textInput.placeholderColor};

  position: absolute;
  top: ${(props) =>
    props.defaultChecked ? props.theme.textInput.label.top : "19px"};
  left: ${(props) =>
    props.defaultChecked ? props.theme.textInput.label.left : "0px"};
  color: ${(props) =>
    props.defaultChecked
      ? (props.defaultInput && props.theme.textInput.backgroundColor) ||
        (props.isError && props.theme.textInput.borderColorError) ||
        (props.isSuccess && props.theme.textInput.borderColorSuccess) ||
        props.theme.textInput.label.colorHover
      : props.theme.textInput.label.color};
  padding: ${(props) => props.padding || props.theme.textInput.label.padding};
  margin: ${(props) => props.margin || props.theme.textInput.margin};

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  vertical-align: ${(props) => props.theme.textInput.verticalAlign};

  -webkit-transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out,
    left 0.2s ease-in-out;
  transition: top 0.2s ease-in-out, font-size 0.2s ease-in-out,
    left 0.2s ease-in-out;
`;

Label.defaultProps = { theme: Base };

export default Label;
