import { styled } from "@linaria/react";
import { Base } from "../themes";
import Button from "../button";

const StyledButton = styled(Button)`
  padding: ${(props) => props.padding || props.theme.textInput.padding};
  height: ${(props) => props.height || props.theme.textInput.height};
  width: ${(props) =>
    props.squareButton
      ? props.height || props.theme.textInput.height
      : "min-content"};
  left: -3px;
  overflow: ${(props) => props.theme.button.overflow};
  text-overflow: ${(props) => props.theme.button.textOverflow};
  position: relative;
  float: right;
`;

StyledButton.defaultProps = { theme: Base };

export default StyledButton;
