import { styled } from "@linaria/react";
import { Base } from "../themes";

const StyledInput = styled.div`
  display: block;
  position: relative;
  width: ${(props) => props.theme.textInput.scale};
  padding: 0;
  margin: 0;
`;

StyledInput.defaultProps = { theme: Base };

export default StyledInput;