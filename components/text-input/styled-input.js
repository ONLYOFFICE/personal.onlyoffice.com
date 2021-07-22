import { styled } from "@linaria/react";
import { Base } from "../themes";

const StyledInput = styled.div`
  display: block;
  position: relative;
  width: ${(props) =>
    props.scale
      ? "100%"
      : props.withButton
      ? "101%"
      : props.width || props.theme.textInput.width};
  padding: "0";
  margin: "0";

  /* input:focus + label {
    top: ${(props) => props.value != "" && "3px"};
    font-size: ${(props) => props.value != "" && "12px"};
  }*/
`;

StyledInput.defaultProps = { theme: Base };

export default StyledInput;
