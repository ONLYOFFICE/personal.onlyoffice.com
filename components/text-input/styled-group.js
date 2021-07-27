import { styled } from "@linaria/react";
import { Base } from "../themes";

const StyleGroupInput = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || props.theme.textInput.height};
`;

StyleGroupInput.defaultProps = {
  theme: Base,
};
export default StyleGroupInput;
