import { styled } from "@linaria/react";
import { Base } from "../themes";

const StyledInput = styled.div`
  display: block;
  position: relative;
  width: ${(props) => props.theme.textInput.scale};
  padding: 0;
  margin: 0;
  
 /* input:focus + label {
    top: ${(props) => props.value != "" && "3px"};
    font-size: ${(props) => props.value != "" && "12px"};
  }*/
`;

StyledInput.defaultProps = { theme: Base };

export default StyledInput;