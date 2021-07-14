import { styled } from "@linaria/react";
import { Base } from "../themes";

const StyledInput = styled.div`
  display: block;
  position: relative;
  width: ${(props) => 
    props.scale ? "100%"
    : props.width || props.theme.textInput.width };
  padding: ${(props) => props.padding || props.theme.textInput.padding};
  margin: ${(props) => props.margin || props.theme.textInput.margin};

input:focus + label {
  top: 3px;
  font-size: 12px;
}
`;


StyledInput.defaultProps = { theme: Base };

export default StyledInput;